import { configureStore } from "@reduxjs/toolkit";
// 
import {signUpReducer} from './auth/signUpSlice';
import {loginReducer} from './auth/loginSlice';
// import {logOutReducer} from './auth/logOutSlice';
import {profileReducer} from './auth/ProfileSlice'
import {updateReducer} from './auth/updateSlice'
// 
export const store = configureStore({
  reducer: {
    signUpAuth :signUpReducer,
    loginAuth:loginReducer,
    // logOutAuth : logOutReducer,
    getProfile : profileReducer,
    updateProfile : updateReducer
    
  },
});