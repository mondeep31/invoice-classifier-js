import React from "react"
import { Header } from "../components/Header"

import { Subheader } from "../components/Subheader"
import InputForm from "../components/InputForm"

export const FormPage = () => {
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center w-full, max-w-4xl">
                <div className="rounded-lg bg-white w-full text-center p-2 h-max px-4">
                    <Header label={"Upload a pdf to check"} />
                    <Subheader label={"Upload a pdf to find the most similar pdf"} />
                    <InputForm />
                </div>

            </div>
        </div>
    )
}

/*
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FileUploadForm from './FileUploadForm';
import { checkFileSimilarity } from '../controllers/fileController';

const SimilarityCheckerView = () => {
    const navigate = useNavigate();

    const handleSubmit = async (file) => {
        try {
            await checkFileSimilarity(file);
            navigate('/result');
        } catch (error) {
            console.error('Error checking file similarity', error);
            // Handle error (e.g., show a message to the user)
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Check Invoice Similarity</h1>
            <p className="mb-4">Upload a PDF invoice to compare with our database</p>
            <FileUploadForm onSubmit={handleSubmit} buttonText="Check Similarity" />
        </div>
    );
};

export default SimilarityCheckerView;

*/