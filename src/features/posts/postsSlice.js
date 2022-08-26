import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [{
            id: '1',
            title: 'Getting paid on the Wall of Death in Rajkot, India',
            no_upvotes: 35800,
            no_comments: 687,
            date_posted: '7 hours ago',
            author: 'someone',
            link: 'random_permalink',
            image: 'https://preview.redd.it/yhvm39buc6m51.jpg?width=960&crop=smart&auto=webp&s=f8d4f8dcdf7d00c2934d7c677fc47a0fb4d3562c'
        },{
            id: '2',
            title: 'Getting paid on the Wall of Death in Rajkot, India',
            no_upvotes: 35800,
            no_comments: 687,
            date_posted: '7 hours ago',
            author: 'someone',
            link: 'random_permalink',
            image: 'https://preview.redd.it/yhvm39buc6m51.jpg?width=960&crop=smart&auto=webp&s=f8d4f8dcdf7d00c2934d7c677fc47a0fb4d3562c'
        },{
            id: '3',
            title: 'Getting paid on the Wall of Death in Rajkot, India',
            no_upvotes: 35800,
            no_comments: 687,
            date_posted: '7 hours ago',
            author: 'someone',
            link: 'random_permalink',
            image: 'https://preview.redd.it/yhvm39buc6m51.jpg?width=960&crop=smart&auto=webp&s=f8d4f8dcdf7d00c2934d7c677fc47a0fb4d3562c'
        },{
            id: '4',
            title: 'Getting paid on the Wall of Death in Rajkot, India',
            no_upvotes: 35800,
            no_comments: 687,
            date_posted: '7 hours ago',
            author: 'someone',
            link: 'random_permalink',
            image: 'https://preview.redd.it/yhvm39buc6m51.jpg?width=960&crop=smart&auto=webp&s=f8d4f8dcdf7d00c2934d7c677fc47a0fb4d3562c'
        },{
            id: '5',
            title: 'Getting paid on the Wall of Death in Rajkot, India',
            no_upvotes: 35800,
            no_comments: 687,
            date_posted: '7 hours ago',
            author: 'someone',
            link: 'random_permalink',
            image: 'https://preview.redd.it/yhvm39buc6m51.jpg?width=960&crop=smart&auto=webp&s=f8d4f8dcdf7d00c2934d7c677fc47a0fb4d3562c'
        },{
            id: '6',
            title: 'Getting paid on the Wall of Death in Rajkot, India',
            no_upvotes: 35800,
            no_comments: 687,
            date_posted: '7 hours ago',
            author: 'someone',
            link: 'random_permalink',
            image: 'https://preview.redd.it/yhvm39buc6m51.jpg?width=960&crop=smart&auto=webp&s=f8d4f8dcdf7d00c2934d7c677fc47a0fb4d3562c'
        },{
            id: '7',
            title: 'Getting paid on the Wall of Death in Rajkot, India',
            no_upvotes: 35800,
            no_comments: 687,
            date_posted: '7 hours ago',
            author: 'someone',
            link: 'random_permalink',
            image: 'https://preview.redd.it/yhvm39buc6m51.jpg?width=960&crop=smart&auto=webp&s=f8d4f8dcdf7d00c2934d7c677fc47a0fb4d3562c'
        },{
            id: '8',
            title: 'Getting paid on the Wall of Death in Rajkot, India',
            no_upvotes: 35800,
            no_comments: 687,
            date_posted: '7 hours ago',
            author: 'someone',
            link: 'random_permalink',
            image: 'https://preview.redd.it/yhvm39buc6m51.jpg?width=960&crop=smart&auto=webp&s=f8d4f8dcdf7d00c2934d7c677fc47a0fb4d3562c'
        }
        ]
    },
    reducers: {


    }
});
export const { } = postsSlice.actions;
export default postsSlice.reducer;

export const selectPosts = state => state.posts.posts;