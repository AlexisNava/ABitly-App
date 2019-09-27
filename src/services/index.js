import axios from 'axios';

export const requestGenerateLink = async originalURL => {
  try {
    const response = axios.post('http://localhost:5001/link/', {
      originalURL,
    });

    return response;
  } catch (error) {
    if (error.response) {
      console.error(error.response.data);
    }

    throw error;
  }
};
