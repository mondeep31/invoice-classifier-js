// import React, { useRef } from 'react'

// const UploadForm = () => {

//     const [fileName, setFileName] = useState('');
//     const [isFileUploaded, setisFileUploaded] = useState(false);
//     const fileInputRef = useRef(null);

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setFileName(file.name);
//             setisFileUploaded(true);
//         } else {
//             setFileName('');
//             setisFileUploaded(false)
//         }
//     }


//     const handleLinkClick = (e) => {
//         e.preventDefault();
//         fileInputRef.current.click();
//     }

//     const handleDragOver = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         const file = e.dataTransfer.files[0];
//         if (file) {
//             setFileName(file.name);
//             setisFileUploaded(true);
//             fileInputRef.current.files = e.dataTransfer.files;
//             handleFileChange({
//                 target: {
//                     files: e.dataTransfer.files
//                 }
//             });
//         }
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         const file = fileInputRef.current.files[0];
//         formData.append('file', file);

//         try {
//             await axios.post('/api/v1/upload/database', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 }
//             })
//             console.log("File uploaded successfully to the database");

//         } catch (error) {
//             console.log('Error uploading the file', error);
//         }
//     }


//     return (
//         <form className="mt-8 space-y-3" onSubmit={handleSubmit} encType="multipart/form-data">
//             <div className="grid grid-cols-1 space-y-2">
//                 <label className="text-sm font-bold text-gray-500 tracking-wide">Upload PDF</label>
//                 <div
//                     className="flex items-center justify-center w-full"
//                     onDragOver={handleDragOver}
//                     onDrop={handleDrop}
//                 >
//                     {!isFileUploaded ? (
//                         <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer">
//                             <img
//                                 className="has-mask h-36 object-center"
//                                 src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
//                                 alt="freepik image"
//                             />
//                             <p className="pointer-none text-gray-500">
//                                 <span className="text-sm">Drag and drop</span> files here <br /> or{' '}
//                                 <a href="#" className="text-blue-600 hover:underline" onClick={handleLinkClick}>
//                                     select a file
//                                 </a>{' '}
//                                 from your computer
//                             </p>
//                         </div>
//                     ) : (
//                         <div className="text-sm text-gray-900">{fileName}</div>
//                     )}
//                     <input
//                         type="file"
//                         className="hidden"
//                         accept="application/pdf"
//                         onChange={handleFileChange}
//                         ref={fileInputRef}
//                         required
//                     />
//                 </div>
//             </div>
//             <p className="text-sm text-gray-300">
//                 <span>File type: pdf only</span>
//             </p>
//             {isFileUploaded && (
//                 <div className="text-sm text-green-500 text-center">
//                     File uploaded successfully!
//                 </div>
//             )}
//             <div>
//                 <button
//                     type="submit"
//                     className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline shadow-lg cursor-pointer transition ease-in duration-300"
//                 >
//                     Upload
//                 </button>
//             </div>
//         </form>
//     );
// }

// export default UploadForm





import React, { useState, useRef } from 'react';

const FileUploadForm = ({ onSubmit, buttonText }) => {
    const [fileName, setFileName] = useState('');
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            setIsFileUploaded(true);
        } else {
            setFileName('');
            setIsFileUploaded(false);
        }
    };

    const handleLinkClick = (e) => {
        e.preventDefault();
        fileInputRef.current.click();
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files[0];
        if (file) {
            setFileName(file.name);
            setIsFileUploaded(true);
            fileInputRef.current.files = e.dataTransfer.files;
            handleFileChange({ target: { files: e.dataTransfer.files } });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const file = fileInputRef.current.files[0];
        if (file) {
            await onSubmit(file);
        }
    };

    return (
        <form className="mt-8 space-y-3" onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="grid grid-cols-1 space-y-2">
                <label className="text-sm font-bold text-gray-500 tracking-wide">Upload PDF</label>
                <div
                    className="flex items-center justify-center w-full"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    {!isFileUploaded ? (
                        <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer">
                            <img
                                className="has-mask h-36 object-center"
                                src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                                alt="freepik image"
                            />
                            <p className="pointer-none text-gray-500">
                                <span className="text-sm">Drag and drop</span> files here <br /> or{' '}
                                <a href="#" className="text-blue-600 hover:underline" onClick={handleLinkClick}>
                                    select a file
                                </a>{' '}
                                from your computer
                            </p>
                        </div>
                    ) : (
                        <div className="text-sm text-gray-900">{fileName}</div>
                    )}
                    <input
                        type="file"
                        className="hidden"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        required
                    />
                </div>
            </div>
            <p className="text-sm text-gray-300">
                <span>File type: pdf only</span>
            </p>
            {isFileUploaded && (
                <div className="text-sm text-green-500 text-center">
                    File uploaded successfully!
                </div>
            )}
            <div>
                <button
                    type="submit"
                    className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline shadow-lg cursor-pointer transition ease-in duration-300"
                >
                    {buttonText}
                </button>
            </div>
        </form>
    );
};

export default FileUploadForm;

