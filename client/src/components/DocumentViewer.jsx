import React from 'react';


const DocumentViewer = () => {
    return (

        <div style={{ height: '70vh', width: '100%' }}>
            <iframe
                src="/Resume.pdf"
                style={{ width: '100%', height: '80vh', border: 'none' }}
                title="PDF Viewer"
            />
        </div>
    );
};

export default DocumentViewer;

