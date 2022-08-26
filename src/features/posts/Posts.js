import { Post } from './Post';

import './Posts.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { selectPosts, selectPostsLoading, selectPostsError, loadSubreddit } from './postsSlice';

export function Posts() {
  const { subreddit_param, subreddit_no_r_param } = useParams();

  let subreddit = 'r/aww';
  if (subreddit_param) {
    subreddit = subreddit_param;
  } else if (subreddit_no_r_param) {
    subreddit = `r/${subreddit_no_r_param}`;
  }

  const dispatch      = useDispatch();
  const navigate      = useNavigate();

  const posts         = useSelector(selectPosts);
  const postsLoading  = useSelector(selectPostsLoading);
  const postsError    = useSelector(selectPostsError);

  const postsJSX      = !postsLoading ? posts.map(post => <Post key={post.id} post={post} loading={false} />) : [{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}].map(post => <Post key={post.id} post={post} loading={true} />);
  
  useEffect(() => {
    dispatch(loadSubreddit(subreddit));
  }, [dispatch, subreddit]);

  useEffect(() => {
    if (postsError) {
      navigate('/');
    }
  }, [navigate, postsError]);

  return (
    <div className="posts">
        <div className="posts_container">
            { postsJSX }
        </div>
    </div>
  );
}