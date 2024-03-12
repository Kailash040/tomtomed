// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { followAUser, unFollowAUser, getAllFollowings , getAllFollowers } from './authServices';
export const FollowUser = createAsyncThunk(
    'auth/followAUser',
    async (_id, userData, thunkAPI) => {
        try {
            const response = await followAUser(_id, userData);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);
// 
export const unFollowUser = createAsyncThunk(
    'auth/unfollowAUser',
    async (_id, userData, thunkAPI) => {
        try {
            const response = await unFollowAUser(_id, userData);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);
// 
export const getAllFollowing = createAsyncThunk(
    'auth/getfollowing',
    async (userData, thunkAPI) => {
        try {
            const response = await getAllFollowings(userData);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);
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
    name: 'followAUser',
    initialState: {
        user: null,
        isLoading: false,
        error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(FollowUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(FollowUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(FollowUser.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = true;
        })
        builder.addCase(unFollowUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(unFollowUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(unFollowUser.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = true;
        })
        builder.addCase(getAllFollowing.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getAllFollowing.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(getAllFollowing.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = true;
        })
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

export const followReducer = authSlice.reducer; // Export the reducer

export default authSlice; // Also export the slice itselffollowReducer