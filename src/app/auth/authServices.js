import axios from 'axios';

// for Login 1
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
// for signUp 1
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
// logOut 3
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
// 4
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
// 5
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
// add post 6
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
// 7
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
// 8
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
// 9
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
// 10

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
// 11
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
// https://tomtomed.onrender.com/api/v1/post/comment/ 12
export const commentOnPost = async (_id, comment) => {
  // console.log("dfdfdfdfdf", _id, userData);
  try {
    const response = await axios.post(`https://tomtomed.onrender.com/api/v1/post/comment/${_id}`,
      { comment: comment }

      ,
      { withCredentials: true, }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
// 13
// https://tomtomed.onrender.com/api/v1/post/comments/
// 
export const getComments = async (postId, userData) => {
  try {
    const response = await axios.get(`https://tomtomed.onrender.com/api/v1/post/comments/${postId}`, userData,

      { withCredentials: true, }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
// 14
export const followAUser = async (_id, userData) => {
  try {
    const response = await axios.post(`https://tomtomed.onrender.com/api/v1/user/follow/${_id}`, userData,

      { withCredentials: true, }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
// 15
export const unFollowAUser = async (_id, userData) => {
  try {
    const response = await axios.post(`https://tomtomed.onrender.com/api/v1/user/unfollow/${_id}`, userData,

      { withCredentials: true, }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
// 16
export const getAllFollowings = async () => {
  try {
    const response = await axios.get(`https://tomtomed.onrender.com/api/v1/user/getAllFollowings`,

      { withCredentials: true, }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
// 17
export const getAllFollowers = async () => {
  try {
    const response = await axios.get(`https://tomtomed.onrender.com/api/v1/user/getAllFollower`,

      { withCredentials: true, }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
// https://tomtomed.onrender.com/api/v1/post/reply-comment/ 18

export const replyOnComment = async (_id, comment) => {
  // console.log("dfdfdfdfdf", _id, userData);
  try {
    const response = await axios.post(`https://tomtomed.onrender.com/api/v1/post/reply-comment/${_id}`,
      { comment: comment }

      ,
      { withCredentials: true, }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
// https://tomtomed.onrender.com/api/v1/user/get-user
//  19
export const getAUser = async (_id) => {
  try {
    const response = await axios.get(`https://tomtomed.onrender.com/api/v1/user/get-user/${_id}`,

      { withCredentials: true, }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
// search user 20
export const searchTheUser = async (query) => {
  try {
    const response = await axios.get(`https://tomtomed.onrender.com/api/v1/user/search?query=${query}`,

      { withCredentials: true, }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const forgetPassword = async (email) => {
  try {
    const response = await axios.post('https://tomtomed.onrender.com/api/v1/user/request-passwordreset', email,
      { withCredentials: true, }
    );
    return response.data;

  } catch (error) {
    throw error;
  }
};