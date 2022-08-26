
import './Posts.css';

import { nFormatter } from '../../util/nFormatter';
import { timeSince } from '../../util/timeSince';

import Skeleton from '@mui/material/Skeleton';

export function Post({ post, loading }) {
  return (
    <a className="post" target="_blank" rel="noreferrer" href={ `https://reddit.com${post.link}` }>
        <div className="col_ups">
            <img alt="up arrow" className="arrow up" src="/arrow.svg" />
            {
                loading ? <Skeleton animation="wave" ><span className="post_upvotes">35.8k</span></Skeleton>
                : <span className="post_upvotes">{nFormatter(post.no_upvotes, 1)}</span>
            }

            <img alt="down arrow" className="arrow down" src="/arrow.svg" />
        </div>
        <div className="body">
            { loading ? <Skeleton animation="wave"  width="100%"><h2 className="post_title">XXXXXXXXXXXXXXXXXXX</h2></Skeleton> : <span><h2 className="post_title">{ post.title }</h2></span>}
            
            { loading ? <Skeleton animation="wave" variant="rounded" width="100%" style={{aspectRatio: 16/9}}><img className="post_img" src={ post.image } alt="Post" /></Skeleton> : <img className="post_img" src={ post.image } alt="Post" />}
            <div className="post_footer">
                {
                    loading ?
                    <Skeleton animation="wave"><div className="post_author"><span>Posted by </span><span className="blue">the author</span></div></Skeleton> : 
                    <div className="post_author"><span>Posted by </span><span className="blue">{post.author}</span></div>
                }
                
                { loading ?
                    <Skeleton animation="wave" ><span className="post_date">7 hours ago</span></Skeleton> :
                    <div className="post_date">{timeSince(post.date_posted)}</div>
                }

                <div className="post_comments">
                    <img className="comment_icon" alt="Comment icon" src="/comment.svg" />
                    { loading ?
                        <Skeleton animation="wave" style={{display: "inline", marginRight: '1.3rem'}}><span class="comments_count">687</span></Skeleton> :
                        <span className="comments_count">{nFormatter(post.no_comments, 1)}</span>
                    }
                    
                </div>
            </div>
        </div>
    </a>
  );
}