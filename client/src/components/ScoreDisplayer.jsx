import React from 'react';

export const ScoreDisplayer = () => {
    const similarityScore = 85; // This would be dynamically set later
    return (
        <div className="text-lg font-bold text-gray-700">
            Similarity Score: {similarityScore}%
        </div>
    );
};



// {/* Display the similarity score */}
// {similarityScore !== null ? (
//     <ScoreDisplayer score={similarityScore} />
// ) : (
//     <div className="text-red-500 mt-4">Error: No similarity score available.</div>
// )}