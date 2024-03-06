// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signUp } from './authServices';

export const signUpUser = createAsyncThunk(
    'auth/signUp',
    async (userData, thunkAPI) => {
        try {
            const response = await signUp(userData);
            return response;
          
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);

const authSlice = createSlice({
    name: 'signUpAuth',
    initialState: {
        user: null,
        isLoading: false,
        error: false,
    },
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase(signUpUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(signUpUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(signUpUser.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = true;
        })
    },
});

export const signUpReducer = authSlice.reducer; // Export the reducer

export default authSlice; // Also export the slice itself