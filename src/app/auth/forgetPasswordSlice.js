// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {  forgetPassword } from './authServices';
import { ToastContainer, toast } from 'react-toastify';

export const forgetPasswords = createAsyncThunk(
    'auth/forget',
    async (email, thunkAPI) => {
        try {
            const response = await forgetPassword(email);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);

const authSlice = createSlice({
    name: 'forgetPassword',
    initialState: {
        // isAuthenticated: false,
        user: null,

        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(forgetPasswords.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(forgetPasswords.fulfilled, (state, action) => {

                state.isLoading = false;
                state.data = action.payload;
                toast.success("Reset Password Link has been sent to your account.");
                <ToastContainer />

            })
            .addCase(forgetPasswords.rejected, (state, action) => {
                state.isLoading = false;
                state.error = true;
                toast.error("mail address not found.");
            });
    },
});
export const forgetPasswordReducer = authSlice.reducer; // Export the reducer
// 
export default authSlice; // Also export the slice itself