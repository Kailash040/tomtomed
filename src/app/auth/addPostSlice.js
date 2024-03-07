// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addPost } from './authServices';
export const addPosts = createAsyncThunk(
    'auth/addPost',
    async ( userData ,thunkAPI) => {
        try {
            const response = await addPost(userData);
            return response;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);

const authSlice = createSlice({
    name: 'addPost',
    initialState: {
        user: null,
        isLoading: false,
        error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addPosts.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(addPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(addPosts.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = true;
        })
    },
});

export const addPostReducer = authSlice.reducer; // Export the reducer

export default authSlice; // Also export the slice itself