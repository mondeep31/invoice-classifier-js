import React, { useState } from 'react';

const DocumentViewer = ({ pdfUrl }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleLoad = () => {
        setLoading(false);
    };

    const handleError = () => {
        setLoading(false);
        setError('Failed to load PDF. Please try again later.');
    };

    return (
        <div className="w-full aspect-[4/3] mb-4">
            {loading && <div>Loading PDF...</div>}
            {error && <div className="text-red-500">{error}</div>}
            <iframe
                src={pdfUrl}
                title="PDF Viewer"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                onLoad={handleLoad}
                onError={handleError}
            >
                This browser does not support PDFs. Please download the PDF to view it.
            </iframe>
        </div>
    );
};

export default DocumentViewer;