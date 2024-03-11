import { configureStore } from "@reduxjs/toolkit";
// 
import { signUpReducer } from './auth/signUpSlice';
import { loginReducer } from './auth/loginSlice';
import { profileReducer } from './auth/ProfileSlice'
import { updateReducer } from './auth/updateSlice'
import { addPostReducer } from './auth/addPostSlice'
import { getPostReducer } from "./auth/getPostSlice";
//  
import {followReducer} from './auth/followUserSlice'
import  {commentOnPostReducer} from './auth/commentOnPostSlice'
import { deleteAPostReducer } from './auth/deletePostSlice'
import { likePostReducer } from "./auth/likePostSlice";
export const store = configureStore({
  reducer: {
    signUpAuth: signUpReducer,
    loginAuth: loginReducer,

    getProfile: profileReducer,
    updateProfile: updateReducer,
    addPost: addPostReducer,
    getPost: getPostReducer,
    deleteAPost: deleteAPostReducer,
    likeAPost: likePostReducer,
    commentPost:commentOnPostReducer,
    followAUser:followReducer
  },
});