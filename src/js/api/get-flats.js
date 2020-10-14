import axios from 'axios';

const getFlats = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/flats`);
    return response.data;
  } catch(err) {
    throw err.message;
  }
};

export default getFlats;