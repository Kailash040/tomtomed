// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPost } from './authServices';
import { getAPost } from './authServices';
import { getAllUserPost } from './authServices';
export const getPostData = createAsyncThunk(
    'auth/getPost',
    async (thunkAPI) => {
        try {
            const response = await getPost();
            return response;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);
// 
export const getAPostData = createAsyncThunk(
    'auth/getAPost',
    async (thunkAPI) => {
        try {
            const response = await getAPost();
            return response;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);
// 
export const getAllPost = createAsyncThunk(
    'auth/getAllUserPost',
    async (thunkAPI) => {
        try {
            const response = await getAllUserPost();
            return response;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);

const authSlice = createSlice({
    name: 'getPost',
    initialState: {
        user: null,
        isLoading: false,
        error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPostData.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getPostData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(getPostData.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = true;
        })
        builder.addCase(getAPostData.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getAPostData.fulfilled, (state, action, { payload }) => {
            state.isLoading = false;
            state.data = action.payload;

        })
        builder.addCase(getAPostData.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = true;
        })
        // 
        builder.addCase(getAllPost.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getAllPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;

        })
        builder.addCase(getAllPost.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = true;
        })
    },
});


export const getPostReducer = authSlice.reducer; // Export the reducer

export default authSlice; // Also export the slice itself