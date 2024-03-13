// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllFollowers } from './authServices';

// 
export const getAllFollower = createAsyncThunk(
    'auth/getfollower',
    async (userData, thunkAPI) => {
        try {
            const response = await getAllFollowers(userData);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);
// 

// 
const authSlice = createSlice({
    name: 'follows',
    initialState: {
        user: null,
        isLoading: false,
        error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
       
      
        builder.addCase(getAllFollower.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getAllFollower.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(getAllFollower.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = true;
        })
    },
});

export const followersReducer = authSlice.reducer; // Export the reducer

export default authSlice; // Also export the slice itselffollowReducer