// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { commentOnPost, getComments, replyOnComment } from './authServices';

export const commentPost = createAsyncThunk(
    'auth/commentOnPost',
    async ({ _id, comment }, thunkAPI) => {

        try {
            const response = await commentOnPost(_id, comment);

            return response;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);
// 
export const getUserComment = createAsyncThunk(
    'auth/getComments',
    async (postId, userData, thunkAPI) => {

        try {
            const response = await getComments(postId, userData);

            return response;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);
// 
export const replyPostComment = createAsyncThunk(
    'auth/replyComment',
    async ({ _id, comment }, thunkAPI) => {

        try {
            const response = await replyOnComment(_id, comment);

            return response;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);
// 
const authSlice = createSlice({
    name: 'commentPost',
    initialState: {
        user: null,
        isLoading: false,
        error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(commentPost.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(commentPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(commentPost.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = true;
        })
        builder.addCase(getUserComment.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getUserComment.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(getUserComment.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = true;
        })
        builder.addCase(replyPostComment.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(replyPostComment.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(replyPostComment.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = true;
        })
    },
});

export const commentOnPostReducer = authSlice.reducer; // Export the reducer

export default authSlice; // Also export the slice itself