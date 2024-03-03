import axios from 'axios';

// for Login
export const login = async (userData) => {
  try {
    const response = await axios.post('https://tomtomed.onrender.com/api/v1/auth/login', userData);
    return response.data;

  } catch (error) {
    throw error;
  }
};
// 
// for signUp
export const signUp = async (userData) => {
  try {
    const response = await axios.post('https://tomtomed.onrender.com/api/v1/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};