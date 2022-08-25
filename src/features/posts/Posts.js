import { Post } from './Post';

import './Posts.css';

export function Posts() {
  return (
    <div className="posts">
        <div className="posts_container">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </div>
  );
}