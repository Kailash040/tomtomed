import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';

import {logOutUser} from './authServices'
export const logOut = createAsyncThunk(
    'auth/logOutUser',
    async (userData, thunkAPI) => {
        try {
            const response = await logOutUser(userData);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);

// 
// Slice to manage authentication state
const authSlice = createSlice({
    name: 'logOutAuth',
    initialState: {
      isLoggedIn: false,
      logoutStatus: 'idle', // Possible values: 'idle', 'loading', 'succeeded', 'failed'
      error: null,
    },
    reducers: {
      logoutSuccess(state) {
        state.isLoggedIn = false;
        state.logoutStatus = 'succeeded';
      },
      logoutFailure(state, action) {
        state.logoutStatus = 'failed';
        state.error = action.payload; // Store the error message
      },
    },
  });
  
  export const { logoutSuccess, logoutFailure } = authSlice.actions;
  
  export const   logOutReducer = authSlice.reducer;