
import './Posts.css';

export function Post({ post }) {
  return (
    <a className="post" href={ post.link }>
        <div className="col_ups">
            <img alt="up arrow" className="arrow up" src="/arrow.svg" />
            <span className="post_upvotes">{ post.no_upvotes }</span>
            <img alt="down arrow" className="arrow down" src="/arrow.svg" />
        </div>
        <div className="body">
            <h2 className="post_title">{ post.title }</h2>
            <img className="post_img" src={ post.image } alt="Post" />
            <div className="post_footer">
                <div className="post_author">Posted by <span className="blue">{ post.author }</span></div>
                <div className="post_date">{ post.date_posted }</div>
                <div className="post_comments">
                    <img className="comment_icon" alt="Comment icon" src="/comment.svg" />
                    <span className="comments_count">{ post.no_comments }</span>
                </div>
            </div>
        </div>
    </a>
  );
}