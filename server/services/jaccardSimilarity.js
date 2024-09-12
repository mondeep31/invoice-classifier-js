const jaccardSimilarity = (setA, setB) => {
    const intersection = setA.filter(value => setB.includes(value));
    const union = new Set([...setA, ...setB]);
    const result = intersection.length / union.size;
    console.log("jaccard", result)
    return result;
};

module.exports = jaccardSimilarity;
