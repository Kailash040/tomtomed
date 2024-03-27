// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { deletePost } from './authServices';
import { ToastContainer, toast } from 'react-toastify';

export const deleteAPost = createAsyncThunk(
    'auth/deletePost',
    async (_id,thunkAPI) => {
        try {
            const response = await deletePost(_id);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);
// 
const authSlice = createSlice({
    name: 'deleteAPost',
    initialState: {
        user: null,
        isLoading: false,
        error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deleteAPost.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(deleteAPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
    toast("Post Deleted successfully");
    <ToastContainer />


        })
        builder.addCase(deleteAPost.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = true;
        })
    },
});

export const deleteAPostReducer = authSlice.reducer; // Export the reducer

export default authSlice; // Also export the slice itself