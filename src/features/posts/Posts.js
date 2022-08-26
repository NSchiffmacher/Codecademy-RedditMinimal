import { Post } from './Post';

import './Posts.css';

import { useSelector } from 'react-redux';
import { selectPosts, selectPostsLoading } from './postsSlice';

export function Posts() {
  const posts         = useSelector(selectPosts);
  const postsLoading  = useSelector(selectPostsLoading);
  
  return (
    <div className="posts">
        <div className="posts_container">
            { posts.map(post => <Post key={post.id} post={post} loading={postsLoading}/>) }
        </div>
    </div>
  );
}