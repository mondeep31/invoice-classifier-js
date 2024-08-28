import React from 'react';
import { EmbedPDF } from "@simplepdf/react-embed-pdf";

const DocumentViewer = () => {
    return (
        <div>
            {/* The PDF is displayed when rendering the component */}
            <EmbedPDF
                mode="inline"
                style={{ width: 900, height: 800 }}
                documentURL="Resume.pdf"
            />

            {/* The PDF picker is displayed when rendering the component */}
            {/* <EmbedPDF
                mode="inline"
                style={{ width: 900, height: 800 }}
            /> */}
        </div>
    );
};

export default DocumentViewer;