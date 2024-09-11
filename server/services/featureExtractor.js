const natural = require('natural');
const _ = require('lodash');

const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmer;

const extractFeatures = (text) => {
    const tokens = tokenizer.tokenize(text.toLowerCase());

    // Stemming to get root words
    const stemmedTokens = tokens.map(token => stemmer.stem(token));

    // Remove common stop words (you can also customize this list)
    const stopWords = ['the', 'is', 'and', 'in', 'on', 'at']; // Example stop words
    const filteredTokens = _.difference(stemmedTokens, stopWords);

    return filteredTokens; // Return extracted keywords and features
};

module.exports = extractFeatures;
