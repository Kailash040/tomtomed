// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from './authServices';

export const loginUser = createAsyncThunk(
    'auth/login',
    async (userData, thunkAPI) => {
        try {
            const response = await login(userData);
            // Save user data to local storage upon successful login
            //   localStorage.setItem('user', JSON.stringify(response.user));
            //   localStorage.setItem('token', response.token);
            return response;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);

const authSlice = createSlice({
    name: 'loginAuth',
    initialState: {
        token: localStorage.getItem('token') || null,
        user: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
            localStorage.setItem('accessToken', action.payload); // Save token in localStorage
          },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
          // Save user data to local storage upon successful login
      localStorage.setItem('token', JSON.stringify(action.payload.accessToken));
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = true;
        })
    },
});

export const loginReducer = authSlice.reducer; // Export the reducer

export default authSlice; // Also export the slice itself
