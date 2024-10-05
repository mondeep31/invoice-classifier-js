const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs').promises;
const fsSync = require('fs');
const mongoose = require('mongoose');

// Import the PDF model
const PDF = require('../models/pdfModel');  // Adjust the path to your actual model file

// GET route to serve PDF by ID
router.get('/pdf/:id', async (req, res) => {
    const id = req.params.id;

    try {
        // Query the database to get the file path using the ID
        const pdfRecord = await PDF.findById(id);

        if (!pdfRecord) {
            return res.status(404).send('File not found in the database');
        }

        // Get the filePath from the database record
        const pdfPath = path.join(__dirname, '../', pdfRecord.filePath);

        // Check if the PDF exists asynchronously
        await fs.access(pdfPath);

        // Set the correct content type for PDF
        res.contentType("application/pdf");

        // Stream the PDF file to the client
        fsSync.createReadStream(pdfPath).pipe(res);
    } catch (err) {
        // If there's an error (e.g., file not found or MongoDB query failed), return a 404 error
        console.error(`Error serving file with ID ${id}:`, err);
        res.status(404).send('PDF not found');
    }
});

module.exports = router;
