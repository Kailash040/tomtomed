// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchTheUser } from './authServices';
export const searchUser = createAsyncThunk(
    'auth/searchUser',
    async ( query,thunkAPI) => {
        try {
            const response = await searchTheUser(query);
            return response;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);

const authSlice = createSlice({
    name: 'searchUser',
    initialState: {
        user: null,
        isLoading: false,
        error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(searchUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(searchUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(searchUser.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = true;
        })
    },
});

export const searchUserReducer = authSlice.reducer; // Export the reducer

export default authSlice; // Also export the slice itself