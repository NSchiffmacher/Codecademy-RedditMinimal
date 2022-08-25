
import './Posts.css';

export function Post() {
  return (
    <div className="post">
        <div className="col_ups">
            <img alt="up arrow" className="arrow up" src="/arrow.svg" />
            <span className="post_upvotes">35.8k</span>
            <img alt="down arrow" className="arrow down" src="/arrow.svg" />
        </div>
        <div className="body">
            <h2 className="post_title">Getting paid on the Wall of Death in Rajkot, India</h2>
            <img className="post_img" src="https://preview.redd.it/yhvm39buc6m51.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=f8d4f8dcdf7d00c2934d7c677fc47a0fb4d3562c" alt="Post" />
            <div className="post_footer">
                <div className="post_author">Posted by <span className="blue">someone</span></div>
                <div className="post_date">7 hours ago</div>
                <div className="post_comments">
                    <img className="comment_icon" alt="Comment icon" src="/comment.svg" />
                    <span className="comments_count">687</span>
                </div>
            </div>
        </div>
    </div>
  );
}