// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAUser } from './authServices';

// 
export const getAUserProfile = createAsyncThunk(
    'auth/getfollower',
    async (_id, thunkAPI) => {
        try {
            const response = await getAUser(_id);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);
// 

// 
const authSlice = createSlice({
    name: 'aUser',
    initialState: {
        user: null,
        isLoading: false,
        error: false,
    },
    reducers: {},
    extraReducers: (builder) => {


        builder.addCase(getAUserProfile.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getAUserProfile.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(getAUserProfile.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = true;
        })
    },
});

export const aUserReducer = authSlice.reducer; // Export the reducer

export default authSlice; // Also export the slice itselffollowReducer