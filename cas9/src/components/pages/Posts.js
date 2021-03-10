// vendor imports 
import { useState, useEffect } from 'react';

const Users = () => {
    // CRUD operations
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setIsDataFetched(true);
            })
            .catch(error => {
                console.log('error', error);
                setIsDataFetched(true);
                setError('Error fetching posts data');
            });
    }, []);

    return (
        <div className='postsWrapper'>
            {isDataFetched
                ?
                error === ''
                    ?
                    <div className='posts'>
                        <h2>This is Posts</h2><br />
                        {posts.map(post => {
                            return (
                                <>
                                <p className='titlePosts' key={post.id}>{post.title}</p>
                                <p className='bodyPosts'>{post.body}</p>
                                <hr/>
                                </>
                            )
                        })
                        }
                    </div>
                    :
                    <h2>{error}</h2>
                :
                <h2>Fetching posts...</h2>
            }
        </div >
    );
};

export default Users;