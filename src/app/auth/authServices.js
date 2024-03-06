import axios from 'axios';

// for Login
export const login = async (userData) => {
  try {
    const response = await axios.post('https://tomtomed.onrender.com/api/v1/auth/login', userData,
      { withCredentials: true, }
    );
    return response.data;

  } catch (error) {
    throw error;
  }
};
// 
// for signUp
export const signUp = async (userData) => {
  try {
    const response = await axios.post('https://tomtomed.onrender.com/api/v1/auth/register', userData,
      { withCredentials: true, }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
// logOut
// 
export const logOutUser = async () => {
  try {
    const response = await axios.get('https://tomtomed.onrender.com/api/v1/auth/logout',
      { withCredentials: true, }
    );
    console.log(response.data);

  } catch (error) {
    throw error;
  }
};
// 
export const getProfile = async () => {
  try {
    const response = await axios.get(`https://tomtomed.onrender.com/api/v1/auth/profile`
      ,
      { withCredentials: true },

    );
    return response.data;

  } catch (error) {
    throw error;
  }
};
// 
export const updateProfile = async (userData) => {
  try {
    const response = await axios.put('https://tomtomed.onrender.com/api/v1/auth/editProfile'
      , userData,
      { withCredentials: true }
,
    );
     return response.data
  } catch (error) {
    throw error;
  }
};