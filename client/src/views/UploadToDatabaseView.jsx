
import React from 'react';
import FileUploadForm from '../components/common/FileUploadForm';
import { uploadFileToDatabase } from '../controller/fileController';
import { Header } from '../components/common/Header'
import { Subheader } from '../components/common/Subheader'
import { useState } from 'react';

const UploadToDatabaseView = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (file) => {
        try {
            await uploadFileToDatabase(file);
            setSuccessMessage('File uploaded to database successfully')
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Error uploading file to database. Please try again.');
            setSuccessMessage('');
        }
    };

    return (

        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center w-full, max-w-4xl">
                <div className="rounded-lg bg-white w-full text-center p-2 h-max px-4">
                    <Header label={"Upload a pdf"} />
                    <Subheader label={"Upload a pdf to upload to the database"} />
                    <FileUploadForm onSubmit={handleSubmit} buttonText="Upload to Database" />
                    {successMessage && (
                        <div className="text-green-500 mt-4">
                            {successMessage}
                        </div>
                    )}
                    {errorMessage && (
                        <div className="text-red-500 mt-4">
                            {errorMessage}
                        </div>
                    )}
                </div>

            </div>
        </div>

    );
};

export default UploadToDatabaseView;