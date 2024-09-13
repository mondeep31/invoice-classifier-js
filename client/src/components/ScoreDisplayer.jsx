import React from 'react';

export const ScoreDisplayer = ({ similarityScore }) => {
    return (
        <div className="text-lg font-bold text-gray-700">
            Similarity Score: {similarityScore ? `${similarityScore}%` : 'N/A'}
        </div>
    );
};
