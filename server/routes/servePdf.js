const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const pdfPath = path.join(__dirname, '../uploads', `${id}.pdf`);

    if (fs.existsSync(pdfPath)) {
        res.contentType("application/pdf");
        fs.createReadStream(pdfPath).pipe(res);
    } else {
        res.status(404).send('PDF not found');
    }
});

module.exports = router;