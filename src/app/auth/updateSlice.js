// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { updateProfile } from './authServices';
export const updateUserProfile = createAsyncThunk(
    'auth/updateProfile',
    async ( thunkAPI) => {
        try {
            const response = await updateProfile();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);
// 
const authSlice = createSlice({
    name: 'updateProfile',
    initialState: {
        user: null,
        isLoading: false,
        error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateUserProfile.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(updateUserProfile.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
         console.log(state.data)
        })
        builder.addCase(updateUserProfile.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = true;
        })
    },
});

export const updateReducer = authSlice.reducer; // Export the reducer

export default authSlice; // Also export the slice itself