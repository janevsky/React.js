import Comment from './Comment';
import PropTypes from 'prop-types';

const Posts = (props) => {
    return (
        <div id='posts'>
            {props.posts.map(post => {
                return (
                    <div key={post.id}>
                        <p>User ID: {post.userId}</p>
                        <p>ID: {post.id}</p>
                        <p>Title: {post.title}</p>
                        <p>Body: {post.body}</p>
                        <div>
                            {post.comments.map(comment => {
                                return (
                                   <Comment key={comment.id} comment={comment}/>
                                )
                            })
                            }
                        </div>
                    </div>
                )
            })
            }
        </div>
    );
};

Posts.propTypes = {
    posts: PropTypes.array.isRequired
};

export default Posts;