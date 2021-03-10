// vendor imports 
import { useState, useEffect } from 'react';

const Users = () => {
    // CRUD operations
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [comments, setComments] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then(response => response.json())
            .then(data => { 
                setComments(data);
                setIsDataFetched(true);
            })
            .catch(error => {
                console.log('error', error);
                setIsDataFetched(true);
                setError('Error fetching comments data');
            });
    }, []);

    return (
        <div className='Wrapper'>
            {isDataFetched
                ?
                error === ''
                    ?
                    <div className='posts'>
                        <h2>This is Comments</h2><br />
                        {comments.map(comment => {
                            return (
                                <>
                                <p className='titlePosts' key={comment.id}>{comment.name}</p>
                                <p className='bodyPosts'>{comment.body}</p>
                                <hr/>
                                </>
                            )
                        })
                        }
                    </div>
                    :
                    <h2>{error}</h2>
                :
                <h2>Fetching comments...</h2>
            }
        </div >
    );
};

export default Users;