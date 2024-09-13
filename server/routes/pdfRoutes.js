const express = require('express');
const multer = require('multer');
const fs = require('fs').promises;
const path = require('path');
const extractTextFromPDF = require('../services/textExtractor');
const extractFeatures = require('../services/featureExtractor');
const vectorizeText = require('../services/tfidfVectorizer');
const cosineSimilarity = require('../services/cosineSimilarity');
const jaccardSimilarity = require('../services/jaccardSimilarity');
const Pdf = require('../models/pdfModel');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/checksimilarity', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const uploadedFilePath = req.file.path;
        let extractedText;
        try {
            extractedText = await extractTextFromPDF(uploadedFilePath);
        } catch (error) {
            console.error('Error extracting text from uploaded PDF:', error);
            return res.status(400).json({ error: 'Unable to extract text from the uploaded PDF' });
        }

        const uploadedPDFFeatures = extractFeatures(extractedText);

        const allPDFs = await Pdf.find();
        if (!allPDFs.length) {
            return res.status(404).json({ error: 'No PDFs found in the database' });
        }

        const allTexts = await Promise.all(
            allPDFs.map(async (pdf) => {
                if (pdf && pdf.filePath) {
                    try {
                        return await extractTextFromPDF(pdf.filePath);
                    } catch (err) {
                        console.error(`Error extracting text from PDF with ID ${pdf._id}:`, err);
                        return null;
                    }
                }
                return null;
            })
        );

        const validTexts = allTexts.filter(text => text !== null);

        if (!validTexts.length) {
            return res.status(404).json({ error: 'No valid PDFs to compare' });
        }

        const vectors = vectorizeText([extractedText, ...validTexts]);
        const results = allPDFs.map((pdf, index) => {
            if (allTexts[index] !== null) {
                const cosine = cosineSimilarity(vectors[0], vectors[index + 1]);
                const jaccard = jaccardSimilarity(uploadedPDFFeatures, extractFeatures(allTexts[index]));
                return { pdfId: pdf._id, cosineSimilarity: cosine, jaccardSimilarity: jaccard };
            }
            return { pdfId: pdf._id, cosineSimilarity: 0, jaccardSimilarity: 0 };
        });

        const mostSimilarPDF = results.reduce((prev, curr) => {
            const prevScore = (prev.cosineSimilarity + prev.jaccardSimilarity) / 2;
            const currScore = (curr.cosineSimilarity + curr.jaccardSimilarity) / 2;
            return currScore > prevScore ? curr : prev;
        });

        // Clean up the uploaded file
        await fs.unlink(uploadedFilePath);

        res.status(200).json({
            message: 'Similarity check complete',
            mostSimilarPDF,
            allResults: results
        });
    } catch (error) {
        console.error('Error during PDF processing:', error);
        res.status(500).json({ error: 'Error during PDF processing', details: error.message });
    }
});

module.exports = router;