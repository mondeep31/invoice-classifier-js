# invoice-classifier-js

## flow of the project

there should be a form where we need to upload a pdf and click on submit, when we click on submit, it sends an api call to the server that works in the following way:

a. text extraction: extract text content from pdfs
b. Feature Extraction: Extract relevant features from the text, such as keywords, invoice numbers, dates, amounts, etc.
c. Structural Analysis: Analyze the layout and structure of the invoices (e.g., table detection, header/footer identification).

then the similarity calculation that goes like this

#### Similarity Calculation: Implement a similarity metric to compare invoices. Consider using techniques like:

#### Cosine Similarity: Calculate the cosine similarity between the feature vectors of two invoices.

#### Jaccard Similarity: Measure the overlap between the sets of keywords or phrases in two invoices.

#### Image Similarity: If structural similarity is crucial, explore image processing techniques to compare the visual layout of invoices.

post this calculation, the server should send back the most similar pdf based on the above calculation to display it the client from the database along with a similarity score

## modules required

### text extraction

1. tesseract.js: for optical character recognition, because we need to handle images or scanned pdfs for text extraction
2. pdf-parse : extract raw text from pdfs

### preprocessing:

1. tokenization: break the extracted text into tokens
2. stemming/lemmatization: reduce words to their base or root form
3. stop word removal. reduce common words (the, and) that contribute to the meaning
   modules required:
   1. natural: for tokenization, stemming, lemmatization, and stop word
   2. lodash: for utility functions, especially useful for feature extraction and manipulating data

### feature extraction:

1. extract key features such as keywords, invoice numbers, dates and amounts from the preprocessed text
2. use natural module here

### similarity calculations:

1. cosine similarity: calculate the cosine similarity between the feature vectors of documents (module: cosine-similarity or implement using natural)
2. jaccard similarity: measure the overlap between the sets of keywords or phrases in two documents(implement using natural)

### structural analysis

1. use sharp and opencv4nodejs if image or layout based similarity is required
2. it can be combined with NLP to enhance the results

### comparison and scoring

1. use the above calculations to score and rank the pdfs stored in the db
2. return the most similar pdf and its similarity score to the client

## modules required

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

## Flow of the program

### Client-Side: Uploading the PDF

    •	User Interaction:
    •	The user navigates to the frontend (built using React) and uploads a PDF document via a form.
    •	Upon selecting the PDF, the user clicks “Submit.”
    •	File Handling:
    •	The file input is managed using react-dropzone, allowing the user to upload the PDF file.
    •	The file is sent to the server using axios in a POST request to the specified API endpoint (e.g., /api/upload).

### 2. Server-Side: Receiving and Parsing the PDF

• File Upload Handling:
• The server (built with Node.js and Express) receives the file via a POST request.
• Middleware like multer handles the file upload, temporarily storing the PDF for processing.
• PDF Parsing:
• The server uses pdf-parse to extract text content from the PDF. The extracted text is converted into a structured format for further analysis.

### 3. Server-Side: Feature Extraction

• Text Feature Extraction:
• The extracted text is processed to identify key features such as keywords, dates, and other relevant details using NLP techniques like tokenization and stemming.
• Image Extraction:
• If images are present in the PDF, they are extracted using tools like pdf-image.
• The server extracts visual features from these images, converting them into numerical vectors for comparison.

### 4. Server-Side: Similarity Calculation

• Text Similarity:
• The server vectorizes the extracted text using techniques like TF-IDF.
• Cosine Similarity and Jaccard Similarity are calculated to compare the text from the uploaded PDF against documents in the database.
• Image Similarity:
• The server calculates image similarity by comparing the vectorized features of images in the uploaded PDF with those in the database.
• Combined Similarity Score:
• The server combines the text and image similarity scores to determine an overall similarity score for each document in the database.

### 5. Server-Side: Identifying the Most Similar PDF

• Similarity Ranking:
• The server ranks all documents in the database based on their combined similarity scores.
• The PDF with the highest similarity score is identified as the most similar document.
• Result Preparation:
• The server prepares a response containing the most similar PDF and the associated similarity score.

### 6. Client-Side: Displaying the Result

• API Response Handling:
• The frontend receives the server’s response, which includes the most similar PDF and its similarity score.
• The response is processed, and the user is presented with the most similar document, along with the similarity score.

### Summary:

    •	PDF Upload: The user uploads a PDF, which is sent to the server.
    •	Feature Extraction: The server extracts text and image features from the PDF.
    •	Similarity Calculation: The server calculates similarity scores using text and image similarity metrics.
    •	Result: The server returns the most similar PDF and its similarity score, which is then displayed to the user.

we can also implement the jaccard and cosine by ourselves without the library

lets start, we can do it. it is possible, lets go. lets do this in a week.

changes made

#2 day 2

didnt use react-pdf, instead used iframe to display the pdf on the frontend, now need to start writing the backend code for it. will start tommorow

checkpoint

updated readme
