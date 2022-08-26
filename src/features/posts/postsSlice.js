import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSubreddit } from "../../api/reddit";

export const loadSubreddit = createAsyncThunk(
    'loadSubreddit',
    async (subreddit, thunkAPI) => {
        return await fetchSubreddit(subreddit);
    }
);

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        loading: true,
        posts: []
    },
    reducers: {},
    extraReducers: {
        [loadSubreddit.fulfilled]: (state, action) => {
            state.loading = false;
            console.log(action);
            state.posts = action.payload;
        },
        [loadSubreddit.pending]: (state, action) => {
            state.loading = true;
        },
        [loadSubreddit.rejected ]: (state, action) => {
            state.loading = false;
            console.error('Error fetching subreddit', action.error);
        }
    }
});
export const { addPost, clearPosts } = postsSlice.actions;
export default postsSlice.reducer;

export const selectPosts = state => state.posts.posts;
export const selectPostsLoading = state => state.posts.loading;