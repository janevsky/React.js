// vendor imports 
import { useState, useEffect } from 'react';

const Users = () => {
    // CRUD operations
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setIsDataFetched(true);
                fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
                .then(data => {
                    
                })
                console.log(data)
            })
            .catch(error => {
                console.log('error', error);
                setIsDataFetched(true);
                setError('Error fetching user data');
            });
    }, []);

    return (
        <div className='usersWrapper'>
            {isDataFetched
                ?
                error === ''
                    ?
                    <div className='users'>
                        <h2>Fetched users</h2><br />
                        {users.map(user => {
                            return (
                                <>
                                <p className='userName' key={user.id}>{user.name}</p>
                                <hr/>
                                </>
                            )
                        })
                        }
                    </div>
                    :
                    <h2>{error}</h2>
                :
                <h2>Fetching users...</h2>
            }
        </div >
    );
};

export default Users;