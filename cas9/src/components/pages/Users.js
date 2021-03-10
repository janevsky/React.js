// vendor imports 
import { useState, useEffect } from 'react';

const Users = () => {
    // CRUD operations
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        // fetch('https://jsonplasldkfjdceholder.typicode.com/users')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setIsDataFetched(true);
            })
            .catch(error => {
                console.log('error', error);
                setIsDataFetched(true);
                setError('Error fetching users data');
            });
    }, []);

    return (
        <div className='wrapper'>
            {isDataFetched
                ?
                error === ''
                    ?
                    <div className='users'>
                        <h2>This is Users</h2><br />
                        {users.map(user => {
                            return (
                                <p key={user.id}>{user.name}</p>
                            )
                        })
                        }
                    </div>
                    :
                    <h2>{error}</h2>
                :
                <h2>Fetching data...</h2>
            }
        </div >
    );
};

export default Users;