const express = require('express');
const multer = require('multer');
const path = require('path');
const PDF = require('../models/pdfModel');

const router = express.Router()

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage })

router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const newPDF = new PDF({
            name: req.file.originalname,
            filePath: req.file.path,
        });
        await newPDF.save();
        res.status(200).json({ message: 'PDF uploaded successfully', pdf: newPDF });
    } catch (err) {
        console.error("error", err);
        res.status(500).json({ error: 'Failed to upload PDF' });
    }
});

module.exports = router;