// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { likePost } from './authServices';
export const likeAPost = createAsyncThunk(
    'auth/likePost',
    async (userData,_id, thunkAPI) => {
        try {
            const response = await likePost(_id,userData);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);
// 
const authSlice = createSlice({
    name: 'likeAPost',
    initialState: {
        user: null,
        isLoading: false,
        error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(likeAPost.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(likeAPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(likeAPost.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = true;
        })
    },
});

export const likePostReducer = authSlice.reducer; // Export the reducer

export default authSlice; // Also export the slice itself