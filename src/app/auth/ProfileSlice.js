// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile} from './authServices';
export const ProfileData = createAsyncThunk(
    'auth/getProfile',
    async (userData, thunkAPI) => {
        try {
            const response = await getProfile(userData);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);
// 
const authSlice = createSlice({
    name: 'getProfile',
    initialState: {
        user: null,
        isLoading: false,
        error: false,
    },
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase(ProfileData.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(ProfileData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(ProfileData.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = true;
        })
    },
});

export const profileReducer = authSlice.reducer; // Export the reducer

export default authSlice; // Also export the slice itself