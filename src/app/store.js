import { configureStore } from "@reduxjs/toolkit";
// 
import {signUpReducer} from './auth/signUpSlice'
import {loginReducer} from './auth/loginSlice'
export const store = configureStore({
  reducer: {
    signUpAuth :signUpReducer,
    loginAuth:loginReducer
  },
});