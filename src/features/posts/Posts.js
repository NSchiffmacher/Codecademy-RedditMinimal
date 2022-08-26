import { Post } from './Post';

import './Posts.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectPosts, selectPostsLoading, loadSubreddit } from './postsSlice';

export function Posts() {
  const subreddit     = 'r/space';

  const dispatch      = useDispatch();
  const posts         = useSelector(selectPosts);
  const postsLoading  = useSelector(selectPostsLoading);

  const postsJSX      = !postsLoading ? posts.map(post => <Post key={post.id} post={post} loading={false} />) : [{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}].map(post => <Post key={post.id} post={post} loading={true} />);
  
  useEffect(() => {
    console.log('hello ? ')
    dispatch(loadSubreddit(subreddit));
  }, [dispatch])

  return (
    <div className="posts">
        <div className="posts_container">
            { postsJSX }
        </div>
    </div>
  );
}