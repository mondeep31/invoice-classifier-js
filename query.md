i want to write the backend logic myself, give me a stepwise feature to work on one by one, what should i work on first. i will give you what should happen you give me what to write, i have written the client side code, but need to work on server side. There are three endpoints in the client side, one is to uploadtodatabase, checksimilarity and resultviewer. the uploadtodatabase endpoint allows the user to upload a file that needs to hit a certain backend that will store the pdf in mongodb, the other one is check similarity, here in it allows the user to upload a pdf and perform all the logic here, i will explain the logic now. first the client will upload the pdf and send it to the server for further processing. now, here the pdf will be extracted to text or image or anything thats suitable and then all the important features in this way

Text Feature Extraction:
• The extracted text is processed to identify key features such as keywords, dates, and other relevant details using NLP techniques like tokenization and stemming.

• Image Extraction:
• If images are present in the PDF, they are extracted using tools like pdf-image.
• The server extracts visual features from these images, converting them into numerical vectors for comparison.

then the server should vectorize the extracted text using TF-IDF and it should take all the pdf in the existing database and calculate their cosine similarity, jaccard similarity and image similarity of all the pdfs(the one uploaded by the client as well as the pdf stored in the db) and the similarity should be checked between the user uploaded pdf and the others in the db and it should take out the most similar pdf and it should save the similarity score in a variable and it should return the most similar pdf from the db to the /resultview endpoint where in there is a pdf viewer along with the similarity score.
