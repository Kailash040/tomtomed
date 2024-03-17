// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, logOutUser } from './authServices';
import { ToastContainer, toast } from 'react-toastify';

export const loginUser = createAsyncThunk(
    'auth/login',
    async (userData, thunkAPI) => {
        try {
            const response = await login(userData);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);
// 
// 
export const logOut = createAsyncThunk(
    'auth/logOutUser',
    async (thunkAPI) => {
        try {
            const response = await logOutUser();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);

const authSlice = createSlice({
    name: 'loginAuth',
    initialState: {
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
    },
    reducers: {


    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;


                // localStorage.setItem('userData', JSON.stringify(state.data));
                state.isAuthenticated = true;
                state.accessToken = action?.payload?.accessToken;
                localStorage.setItem('accessToken', JSON.stringify(state?.data?.accessToken));
                state.refreshToken = action?.payload?.refreshToken;
                localStorage.setItem('refreshToken', JSON.stringify(action?.payload?.refreshToken));
                toast.success("login successful");

                <ToastContainer />
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                toast.error("Invalid email or password");
            })
            .addCase(logOut.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logOut.fulfilled, (state, action) => {

                state.isLoading = false;
                state.isAuthenticated = false;
                state.accessToken = null;
                // localStorage.removeItem('accessToken');

                state.refreshToken = null;
                // localStorage.removeItem('refreshToken');

            })
            .addCase(logOut.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});
export const loginReducer = authSlice.reducer; // Export the reducer
// 
export default authSlice; // Also export the slice itself