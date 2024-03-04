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
// logOut
// 
export const logOutUser = async (userData) => {
  try {
    const response = await axios.get('https://tomtomed.onrender.com/api/v1/auth/logout', userData);
    return response.data;

  } catch (error) {
    throw error;
  }
};
// 
export const getProfile = async () => {
  try {
    const response = await axios.get('https://tomtomed.onrender.com/api/v1/auth/profile');
    return response.data;

  } catch (error) {
    throw error;
  }
};