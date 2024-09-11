const express = require('express');
const multer = require('multer');
const extractTextFromPDF = require('../services/textExtractor');
const extractFeatures = require('../services/featureExtractor');

const router = express.Router();
// const upload = multer({ dest: 'uploads/' }); // Save uploaded files temporarily
const upload = multer({ storage: multer.memoryStorage() }); // Store files in memory

// /checksimilarity endpoint
router.post('/checksimilarity', upload.single('pdf'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const pdfBuffer = req.file.buffer; // Get the uploaded PDF buffer

        // Ensure pdfBuffer is valid before passing it to pdf-parse
        if (!pdfBuffer) {
            return res.status(400).json({ error: 'PDF buffer is empty' });
        }

        // Extract text from PDF buffer
        const extractedText = await extractTextFromPDF(pdfBuffer);

        // Extract features from the text
        const features = extractFeatures(extractedText);

        // Send the extracted data back
        res.status(200).json({
            message: 'Text extracted and features processed',
            extractedText,
            features
        });
    } catch (error) {
        console.error('Error during PDF processing:', error);
        res.status(500).json({ error: 'Error during PDF processing' });
    }
});

module.exports = router;
