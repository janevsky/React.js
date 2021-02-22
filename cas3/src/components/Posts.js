/* Homework 03
  1. Create Posts component and display the data from the given posts array. 
*/
const posts = (props) => {
    return (        
        <div id='Posts'>
            <h3>Posts</h3>
            <h4>
            { props.posts.map((title, userId) => {
                return (
                    <p key={userId}> {title.title}</p>
                )
            })}
            </h4>
            <p>
            { props.posts.map((body, userId) => {
                return (
                    <p key={userId}> {body.body}</p>
                )
            })}
            </p>
            
            
        </div>
    )
};

export default posts;