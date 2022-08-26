import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        loading: false,
        posts: [{
            id: '1',
            title: 'Getting paid on the Wall of Death in Rajkot, India',
            no_upvotes: 35800,
            no_comments: 687,
            date_posted: 1661490009 * 1000,
            author: 'someone',
            link: 'random_permalink',
            image: 'https://preview.redd.it/yhvm39buc6m51.jpg?width=960&crop=smart&auto=webp&s=f8d4f8dcdf7d00c2934d7c677fc47a0fb4d3562c'
        },{
            id: '2',
            title: 'Getting paid on the Wall of Death in Rajkot, India',
            no_upvotes: 35800,
            no_comments: 687,
            date_posted: 1661490009 * 1000,
            author: 'someone',
            link: 'random_permalink',
            image: 'https://preview.redd.it/yhvm39buc6m51.jpg?width=960&crop=smart&auto=webp&s=f8d4f8dcdf7d00c2934d7c677fc47a0fb4d3562c'
        },{
            id: '3',
            title: 'Getting paid on the Wall of Death in Rajkot, India',
            no_upvotes: 35800,
            no_comments: 687,
            date_posted: 1661490009 * 1000,
            author: 'someone',
            link: 'random_permalink',
            image: 'https://preview.redd.it/yhvm39buc6m51.jpg?width=960&crop=smart&auto=webp&s=f8d4f8dcdf7d00c2934d7c677fc47a0fb4d3562c'
        },{
            id: '4',
            title: 'Getting paid on the Wall of Death in Rajkot, India',
            no_upvotes: 35800,
            no_comments: 687,
            date_posted: 1661490009 * 1000,
            author: 'someone',
            link: 'random_permalink',
            image: 'https://preview.redd.it/yhvm39buc6m51.jpg?width=960&crop=smart&auto=webp&s=f8d4f8dcdf7d00c2934d7c677fc47a0fb4d3562c'
        },{
            id: '5',
            title: 'Getting paid on the Wall of Death in Rajkot, India',
            no_upvotes: 35800,
            no_comments: 687,
            date_posted: 1661490009 * 1000,
            author: 'someone',
            link: 'random_permalink',
            image: 'https://preview.redd.it/yhvm39buc6m51.jpg?width=960&crop=smart&auto=webp&s=f8d4f8dcdf7d00c2934d7c677fc47a0fb4d3562c'
        },{
            id: '6',
            title: 'Getting paid on the Wall of Death in Rajkot, India',
            no_upvotes: 35800,
            no_comments: 687,
            date_posted: 1661490009 * 1000,
            author: 'someone',
            link: 'random_permalink',
            image: 'https://preview.redd.it/yhvm39buc6m51.jpg?width=960&crop=smart&auto=webp&s=f8d4f8dcdf7d00c2934d7c677fc47a0fb4d3562c'
        },{
            id: '7',
            title: 'Getting paid on the Wall of Death in Rajkot, India',
            no_upvotes: 35800,
            no_comments: 687,
            date_posted: 1661490009 * 1000,
            author: 'someone',
            link: 'random_permalink',
            image: 'https://preview.redd.it/yhvm39buc6m51.jpg?width=960&crop=smart&auto=webp&s=f8d4f8dcdf7d00c2934d7c677fc47a0fb4d3562c'
        },{
            id: '8',
            title: 'Getting paid on the Wall of Death in Rajkot, India',
            no_upvotes: 35800,
            no_comments: 687,
            date_posted: 1661490009 * 1000,
            author: 'someone',
            link: 'random_permalink',
            image: 'https://preview.redd.it/yhvm39buc6m51.jpg?width=960&crop=smart&auto=webp&s=f8d4f8dcdf7d00c2934d7c677fc47a0fb4d3562c'
        }
        ]
    },
    reducers: {
        addPost: (state, action) => {
            const { id, title, no_upvotes, no_comments, date_posted, author, link, image } = action.payload;
            state.posts.push({
                id              : id,
                title           : title,
                no_upvotes      : no_upvotes,
                no_comments     : no_comments,
                date_posted     : date_posted,
                author          : author,
                link            : link,
                image           : image
                });
        }
    }
});
export const { } = postsSlice.actions;
export default postsSlice.reducer;

export const selectPosts = state => state.posts.posts;
export const selectPostsLoading = state => state.posts.loading;