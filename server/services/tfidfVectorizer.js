const natural = require('natural');
const TfIdf = natural.TfIdf;

const tfidf = new TfIdf();

const vectorizeText = (documents) => {
    if (!documents || documents.length === 0) {
        throw new Error('No documents provided for TF-IDF vectorization');
    }

    documents.forEach(doc => tfidf.addDocument(doc));

    return documents.map((doc, i) => {
        if (i >= tfidf.documents.length) {
            throw new Error(`Document index ${i} is out of bounds`);
        }

        const terms = tfidf.listTerms(i);
        return terms.map(term => ({
            term: term.term,
            tfidf: term.tfidf
        }));
    });
};

module.exports = vectorizeText;
