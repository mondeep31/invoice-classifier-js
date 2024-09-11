const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
    name: String,
    filePath: String,
    uploadedAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('PDF', pdfSchema);
