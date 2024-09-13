import axios from 'axios';

export const checkFileSimilarity = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post('http://localhost:5000/api/v1/checksimilarity', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error checking file similarity', error)
        throw error;

    }
};

export const uploadFileToDatabase = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post('http://localhost:5000/api/v1/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        throw error("Error uploading file to the database: ",);

    }
};