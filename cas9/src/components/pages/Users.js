import { useEffect, useState } from 'react';

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
    })
    .catch(error => {
        console.log('error', error);
        setIsDataFetched(true);
        setError(error);
    });
}, []);

    return (
        <div className='wrapper'>
            {isDataFetched
            ?
            error === ''
            ?
            <>
            <h2>This is Users</h2><br/>
            {users.map(user => {
                return (
                <p key={user.id}>{user.name}</p>
                )
            })
        }
        </>
        :
        <h2>{error}</h2>
            :
            <h2>Still fetching data....</h2>
            }
        </div>
    );
};

export default Users;