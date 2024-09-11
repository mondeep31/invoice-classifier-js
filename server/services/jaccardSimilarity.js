const jaccardSimilarity = (setA, setB) => {
    const intersection = setA.filter(value => setB.includes(value));
    const union = new Set([...setA, ...setB]);

    return intersection.length / union.size;
};

module.exports = jaccardSimilarity;
