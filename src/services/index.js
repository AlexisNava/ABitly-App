import axios from 'axios';

export const requestGenerateLink = async originalUrl => {
  try {
    const response = await axios.post('http://localhost:5001/link/', {
      originalUrl,
    });

    if (response && response.data && response.data) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      console.error(error.response.data);
    }

    throw error;
  }
};
