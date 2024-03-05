// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, logOutUser } from './authServices';

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

// const authSlice = createSlice({
//     name: 'loginAuth',
//     initialState: {
//         token: localStorage.getItem('token') || null,
//         user: null,
//         isLoading: false,
//         error: null,
//     },
//     reducers: {
//         setToken(state, action) {
//             state.token = action.payload;
//             localStorage.setItem('accessToken', action.payload); // Save token in localStorage
//         },
//     },
//     extraReducers: (builder) => {
//         builder.addCase(loginUser.pending, (state, action) => {
//             state.isLoading = true;
//         })
//         builder.addCase(loginUser.fulfilled, (state, action) => {
//             state.isLoading = false;
//             state.data = action.payload;
//             // Save user data to local storage upon successful login
//             localStorage.setItem('token', JSON.stringify(action.payload.accessToken));
//         })
//         builder.addCase(loginUser.rejected, (state, action) => {
//             console.log("Error", action.payload);
//             state.error = true;
//         })
//     },
// });

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

                console.log(state.data);
                // localStorage.setItem('userData', JSON.stringify(state.data));
                state.isAuthenticated = true;
                state.accessToken = action.payload.accessToken;
                localStorage.setItem('accessToken', JSON.stringify(state.data.accessToken));
                state.refreshToken = action.payload.refreshToken;
                localStorage.setItem('refreshToken', JSON.stringify(action.payload.refreshToken));
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
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