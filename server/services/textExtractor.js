const pdfParse = require('pdf-parse');

const extractTextFromPDF = async (pdfBuffer) => {
    try {
        const data = await pdfParse(pdfBuffer);
        return data.text; // Extracted text content from the PDF
    } catch (error) {
        console.error('Error extracting text from PDF:', error);
        throw error;
    }
};

module.exports = extractTextFromPDF;
