// vendor imports 
import { useState, useEffect } from 'react';

const Users = () => {
    // CRUD operations
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setIsDataFetched(true);
            })
            .catch(error => {
                console.log('error', error);
                setIsDataFetched(true);
                setError('Error fetching user data');
            });
    }, []);

    return (
        <div className='postsWrapper'>
            {isDataFetched
                ?
                error === ''
                    ?
                    <div className='posts'>
                        <h2>Fetched posts</h2><br />
                        {posts.map(post => {
                            return (
                                <>
                                <h4><p className='titlePosts' key={post.id}>{post.title}</p></h4>
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