// Function to align two vectors (vectorA and vectorB) based on their terms and TF-IDF values
const alignVectors = (vectorA, vectorB) => {
    const termMap = {};

    // Collect all terms from vectorA and assign TF-IDF values, defaulting vectorB's to 0
    vectorA.forEach(item => {
        termMap[item.term] = { a: item.tfidf, b: 0 };
    });


    // Collect all terms from vectorB and update existing or add new terms with their TF-IDF values
    vectorB.forEach(item => {
        if (termMap[item.term]) {
            termMap[item.term].b = item.tfidf;
        } else {
            termMap[item.term] = { a: 0, b: item.tfidf };
        }
    });

    // Convert the termMap into two aligned arrays
    const alignedA = Object.values(termMap).map(item => item.a);
    const alignedB = Object.values(termMap).map(item => item.b);
    // console.log("alignedA", alignedA)
    // console.log("alignedB", alignedB)
    // Return the aligned vectors
    return [alignedA, alignedB];
};

// Function to calculate cosine similarity between two vectors
const cosineSimilarity = (vectorA, vectorB) => {
    // Align the vectors first based on common terms
    const [alignedA, alignedB] = alignVectors(vectorA, vectorB);

    // Calculate the dot product of the aligned vectors
    const dotProduct = alignedA.reduce((sum, aVal, index) => sum + (aVal * alignedB[index]), 0);

    // Calculate the magnitudes of the aligned vectors
    const magnitudeA = Math.sqrt(alignedA.reduce((sum, aVal) => sum + (aVal * aVal), 0));
    const magnitudeB = Math.sqrt(alignedB.reduce((sum, bVal) => sum + (bVal * bVal), 0));

    const result = magnitudeA && magnitudeB ? dotProduct / (magnitudeA * magnitudeB) : 0;
    console.log("Result is", result)
    // Return cosine similarity or 0 if either magnitude is 0 (to avoid division by zero)
    return result;
};

// Export the cosineSimilarity function
module.exports = cosineSimilarity;
