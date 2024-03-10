// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { commentOnPost } from './authServices';

export const commentPost = createAsyncThunk(
    'auth/commentOnPost',
    async (_id, thunkAPI) => {
        try {
            const response = await commentOnPost(_id);
            return response;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);

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
    },
});

export const commentOnPostReducer = authSlice.reducer; // Export the reducer

export default authSlice; // Also export the slice itself