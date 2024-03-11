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
// add post
export const addPost = async (userData) => {
  try {
    const response = await axios.post('https://tomtomed.onrender.com/api/v1/post/create-post', userData,


      { withCredentials: true, }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
// 
export const getPost = async () => {
  try {
    const response = await axios.get(`https://tomtomed.onrender.com/api/v1/auth/myPosts`,

      { withCredentials: true, }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
// 
// https://tomtomed.onrender.com/api/v1/post/getAllPost
export const getAllUserPost = async () => {
  try {
    const response = await axios.get(`https://tomtomed.onrender.com/api/v1/post/getAllPost`,

      { withCredentials: true, }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
// 
export const getAPost = async (_id, userData) => {
  try {
    const response = await axios.get(`https://tomtomed.onrender.com/api/v1/post/getpost/${_id}`,
      userData,
      { withCredentials: true, }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
// 

export const deletePost = async (_id) => {
  try {
    const response = await axios.delete(`https://tomtomed.onrender.com/api/v1/post/delete/${_id}`,

      { withCredentials: true, }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
// like post
// 
export const likePost = async (userData, _id) => {
  try {
    const response = await axios.post(`https://tomtomed.onrender.com/api/v1/post/like/${_id}`, userData,

      { withCredentials: true, }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
// https://tomtomed.onrender.com/api/v1/post/comment/
export const commentOnPost = async (_id, userData) => {
  console.log("dfdfdfdfdf",_id,userData);
  try {
    const response = await axios.post(`https://tomtomed.onrender.com/api/v1/post/comment/${_id}`,
      userData

      ,
      { withCredentials: true, }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};