import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axiosInstance';

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async() => {
        const response = await axiosInstance.get('/posts');
        return response.data.slice(0, 10);
    }
);

const postSlice = createSlice({
    name: 'posts',
    
    initialState: {
        items: [],
        loading: false,
        error: null,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })

            .addCase(fetchPosts.rejected, (state) => {
                state.loading = false;
                state.error = 'Failed to fetch posts';
            });
    },
});

export default postSlice.reducer;