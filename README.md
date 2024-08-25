# invoice-classifier-js

# test push

flow of the project

there should be a form where we need to upload a pdf and click on submit, when we click on submit, it sends an api call to the server that works in the following way:

a. text extraction: extract text content from pdfs
b. Feature Extraction: Extract relevant features from the text, such as keywords, invoice numbers, dates, amounts, etc.
c. Structural Analysis: Analyze the layout and structure of the invoices (e.g., table detection, header/footer identification).

then the similarity calculation that goes like this

Similarity Calculation: Implement a similarity metric to compare invoices. Consider using techniques like:

Cosine Similarity: Calculate the cosine similarity between the feature vectors of two invoices.
Jaccard Similarity: Measure the overlap between the sets of keywords or phrases in two invoices.
Image Similarity: If structural similarity is crucial, explore image processing techniques to compare the visual layout of invoices.

post this calculation, the server should send back the most similar pdf based on the above calculation to display it the client from the database along with a similarity score

## modules required

text extraction

1. tesseract.js: for optical character recognition, because we need to handle images or scanned pdfs for text extraction
2. pdf-parse : extract raw text from pdfs

preprocessing:

1. tokenization: break the extracted text into tokens
2. stemming/lemmatization: reduce words to their base or root form
3. stop word removal. reduce common words (the, and) that contribute to the meaning
   modules required:
   1. natural: for tokenization, stemming, lemmatization, and stop word
   2. lodash: for utility functions, especially useful for feature extraction and manipulating data

feature extraction:

1. extract key features such as keywords, invoice numbers, dates and amounts from the preprocessed text
2. use natural module here

similarity calculations:

1. cosine similarity: calculate the cosine similarity between the feature vectors of documents (module: cosine-similarity or implement using natural)
2. jaccard similarity: measure the overlap between the sets of keywords or phrases in two documents(implement using natural)

structural analysis

1. use sharp and opencv4nodejs if image or layout based similarity is required
2. it can be combined with NLP to enhance the results

comparison and scoring

1. use the above calculations to score and rank the pdfs stored in the db
2. return the most similar pdf and its similarity score to the client

modules required

Backend (Node.js + Express):

    •	express
    •	mongoose
    •	pdf-parse
    •	natural
    •	xml2js
    •	multer
    •	tesseract.js
    •	lodash
    •	@tensorflow/tfjs-node
    •	sharp
    •	cosine-similarity or custom implementation using natural
    •	opencv4nodejs

Frontend (React + Recoil):

    •	axios
    •	react-dropzone
    •	recoil
    •	react-pdf
    •	react-router-dom

we can also implement the jaccard and cosine by ourselves without the library

lets start, we can do it. it is possible, lets go. lets do this in a week.
