
// import InputForm from '../components/InputForm'

// import React from 'react'

// const UploadDoc = () => {
//     return (
//         <div className="bg-slate-300 h-screen flex justify-center">
//             <div className="flex flex-col justify-center w-full, max-w-4xl">
//                 <div className="rounded-lg bg-white w-full text-center p-2 h-max px-4">
//                     <Header label={"Upload a pdf"} />
//                     <Subheader label={"Upload a pdf to put in the database for checking"} />
//                     <InputForm />
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default UploadDoc


import React from 'react';
import FileUploadForm from '../components/common/FileUploadForm';
import { uploadFileToDatabase } from '../controller/fileController';
import { Header } from '../components/common/Header'
import { Subheader } from '../components/common/Subheader'


const UploadToDatabaseView = () => {
    const handleSubmit = async (file) => {
        try {
            await uploadFileToDatabase(file);
            alert('File uploaded to database successfully');
        } catch (error) {
            console.error('Error uploading file to database', error);
            // Handle error (e.g., show a message to the user)
        }
    };

    return (

        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center w-full, max-w-4xl">
                <div className="rounded-lg bg-white w-full text-center p-2 h-max px-4">
                    <Header label={"Upload a pdf"} />
                    <Subheader label={"Upload a pdf to upload to the database"} />
                    <FileUploadForm onSubmit={handleSubmit} buttonText="Upload to Database" />
                </div>

            </div>
        </div>

    );
};

export default UploadToDatabaseView;