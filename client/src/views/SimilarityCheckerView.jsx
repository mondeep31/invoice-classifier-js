import React, { useState } from "react";
import { Header } from "../components/common/Header";
import { Subheader } from "../components/common/Subheader";
import { checkFileSimilarity } from '../controller/fileController';
import FileUploadForm from "../components/common/FileUploadForm";
import { useNavigate } from "react-router-dom";

const SimilarityCheckerView = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (file) => {
        try {
            const result = await checkFileSimilarity(file);
            const { mostSimilarPDF, allResults } = result;

            setErrorMessage('');
            setSuccessMessage('File uploaded successfully. Redirecting to results...');

            setTimeout(() => {
                navigate('/result', {
                    state: {
                        mostSimilarPDF,
                        allResults,
                        uploadedFileName: file.name
                    }
                });
            }, 1500);
        } catch (error) {
            console.error('Error checking file similarity', error);
            setErrorMessage('Error checking file similarity. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center w-full max-w-4xl">
                <div className="rounded-lg bg-white w-full text-center p-2 h-max px-4">
                    <Header label={"Upload a PDF to check"} />
                    <Subheader label={"Upload a PDF to find the most similar PDF"} />

                    {/* Display Success or Error Messages */}
                    {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                    {successMessage && <div className="text-green-500">{successMessage}</div>}

                    <FileUploadForm onSubmit={handleSubmit} buttonText={"Submit to check similar PDF"} />
                </div>
            </div>
        </div>
    );
};

export default SimilarityCheckerView;
