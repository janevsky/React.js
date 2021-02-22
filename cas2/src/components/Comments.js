const Comments = (props) => {
    // console.log('comments props', props);   
    /*
        if(props.hasComments) {
            console.log('The post has comments');
        } else {
            console.log('The post has no comments');
        }
    */
    return (
        <div id='comments'>
            {/* ternary operator */}
            {/* check condition 
                ?
                    execute if condition is fullfield 
                : 
                    execute if condition is not fullfield
              */}
            {/* {props.hasComments === true */}
            {/* {props.hasComments
                ?
                <h3>The post has comments</h3>
                :
                <h3>The post has no comments</h3>
            } */}
            {/* && operator */}
            {props.hasComments && <h3>The post has comments</h3>}
        </div>
    );
};

export default Comments;