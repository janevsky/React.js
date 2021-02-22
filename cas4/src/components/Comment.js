const Comment = (props) => {
    return (
        <div id='comment'>
            <p>Post ID: {props.comment.postId}</p>
            <p>ID: {props.comment.id}</p>
            <p>Name: {props.comment.name}</p>
            <p>Email: {props.comment.email}</p>
            <p>Body: {props.comment.body}</p>
        </div>
    );
};

export default Comment;