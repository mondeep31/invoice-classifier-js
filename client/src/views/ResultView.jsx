import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DocumentViewer from '../components/DocumentViewer';
import { ScoreDisplayer } from '../components/ScoreDisplayer';

const ResultViewer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { mostSimilarPDF, allResults, uploadedFileName } = location.state || {};

    if (!mostSimilarPDF || !allResults) {
        navigate('/');
        return null;
    }

    const averageSimilarity = (mostSimilarPDF.cosineSimilarity + mostSimilarPDF.jaccardSimilarity) / 2;
    const similarityScore = Math.min(averageSimilarity * 100, 100).toFixed(2);

    // Construct the correct URL for the PDF
    const pdfUrl = `http://localhost:5000/api/v1/pdf/${mostSimilarPDF.pdfId}`;

    return (
        <div className="bg-slate-300 min-h-screen flex justify-center py-8">
            <div className="bg-white w-full max-w-4xl p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Most Similar Document</h1>
                <p className="mb-4">Uploaded file: {uploadedFileName}</p>
                <DocumentViewer pdfUrl={pdfUrl} />
                <ScoreDisplayer similarityScore={similarityScore} />
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Similarity Details</h2>
                    <p>Cosine Similarity: {Math.min(mostSimilarPDF.cosineSimilarity * 100, 100).toFixed(2)}%</p>
                    <p>Jaccard Similarity: {Math.min(mostSimilarPDF.jaccardSimilarity * 100, 100).toFixed(2)}%</p>
                </div>
            </div>
        </div>
    );
};

export default ResultViewer;