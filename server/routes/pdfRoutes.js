const express = require('express');
const multer = require('multer');
const extractTextFromPDF = require('../services/textExtractor');
const extractFeatures = require('../services/featureExtractor');
const vectorizeText = require('../services/tfidfVectorizer');
const cosineSimilarity = require('../services/cosineSimilarity');
const jaccardSimilarity = require('../services/jaccardSimilarity');
const Pdf = require('../models/pdfModel'); // Model for PDFs stored in MongoDB

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); // Store files in memory

// /checksimilarity endpoint
router.post('/checksimilarity', upload.single('pdf'), async (req, res) => {
    try {
        // Step 1: Ensure the PDF file was uploaded
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const pdfBuffer = req.file.buffer;

        // Step 2: Ensure the PDF buffer is valid
        if (!pdfBuffer) {
            return res.status(400).json({ error: 'PDF buffer is empty' });
        }

        // Step 3: Extract text from uploaded PDF
        const extractedText = await extractTextFromPDF(pdfBuffer);

        // Step 4: Extract features from the uploaded PDF text
        const uploadedPDFFeatures = extractFeatures(extractedText);

        // Step 5: Fetch all existing PDFs from the database (assuming the Pdf model stores extracted text)
        const allPDFs = await Pdf.find();

        if (!allPDFs.length) {
            return res.status(404).json({ error: 'No PDFs found in the database' });
        }

        // Step 6: Ensure all stored PDFs have text for comparison (handle cases where text is missing)
        const allTexts = await Promise.all(
            allPDFs.map(async (pdf) => {
                if (!pdf.text) {
                    // If the text is not already stored, extract it from the PDF file
                    const pdfBuffer = pdf.filePath; // Assuming you store file paths in the model
                    const pdfText = await extractTextFromPDF(pdfBuffer);
                    return pdfText;
                }
                return pdf.text; // Return stored text if available
            })
        );

        // Step 7: Vectorize the uploaded PDF and all existing PDFs
        const vectors = vectorizeText([extractedText, ...allTexts]);

        // Step 8: Calculate similarity scores between the uploaded PDF and each existing PDF
        const results = allPDFs.map((pdf, index) => {
            const cosine = cosineSimilarity(vectors[0], vectors[index + 1]); // Compare uploaded PDF with each existing PDF
            const jaccard = jaccardSimilarity(uploadedPDFFeatures, extractFeatures(allTexts[index])); // Compare features

            return {
                pdfId: pdf._id,
                cosineSimilarity: cosine,
                jaccardSimilarity: jaccard
            };
        });

        // Step 9: Find the PDF with the highest combined similarity score
        const mostSimilarPDF = results.reduce((prev, curr) => {
            const prevScore = (prev.cosineSimilarity + prev.jaccardSimilarity) / 2;
            const currScore = (curr.cosineSimilarity + curr.jaccardSimilarity) / 2;
            return currScore > prevScore ? curr : prev;
        });

        // Step 10: Return the most similar PDF and all similarity results
        res.status(200).json({
            message: 'Similarity check complete',
            mostSimilarPDF,
            allResults: results // Optionally return all similarity results for all PDFs
        });

    } catch (error) {
        console.error('Error during PDF processing:', error);
        res.status(500).json({ error: 'Error during PDF processing' });
    }
});

module.exports = router;
