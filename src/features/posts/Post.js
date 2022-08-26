
import './Posts.css';

import { nFormatter } from '../../util/nFormatter';
import { timeSince } from '../../util/timeSince';

export function Post({ post }) {
  return (
    <a className="post" href={ post.link }>
        <div className="col_ups">
            <img alt="up arrow" className="arrow up" src="/arrow.svg" />
            <span className="post_upvotes">{ nFormatter(post.no_upvotes, 1) }</span>
            <img alt="down arrow" className="arrow down" src="/arrow.svg" />
        </div>
        <div className="body">
            <h2 className="post_title">{ post.title }</h2>
            <img className="post_img" src={ post.image } alt="Post" />
            <div className="post_footer">
                <div className="post_author">Posted by <span className="blue">{ post.author }</span></div>
                <div className="post_date">{ timeSince(post.date_posted) }</div>
                <div className="post_comments">
                    <img className="comment_icon" alt="Comment icon" src="/comment.svg" />
                    <span className="comments_count">{ nFormatter(post.no_comments, 1) }</span>
                </div>
            </div>
        </div>
    </a>
  );
}