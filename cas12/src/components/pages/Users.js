// vendor imports
import { useState } from 'react';
import { connect } from 'react-redux';
// actions
import { addUser } from '../../redux/ducks/users';

const Users = (props) => {
    // const [users, setUsers] = useState([]);
    // setUsers(data);
    /*  setCounter = (state => {
        return [];
    }); */
    // car.model = 'Audi'; !!!

    const [user, setUser] = useState({
        id: null,
        name: ''
    }); // user object must contain all properties like other user objects returned from jsonplaceholder

    const onChangeUserName = (event) => {
        setUser(state => {
            return {
                ...state,
                name: event.target.value
            }
        });
    };

    const onClickAddUser = () => {
        props.addUser(user);
        setUser(() => {
            return {
                id: null,
                name: ''
            }
        });
    };

    return (
        console.log('users props', props),
        <div className='wrapper'>
            <div className='users'>
                <h2>This is Users</h2><br />
                {props.users.map(user => {
                    return (
                        <p key={user.id}>{user.name}</p>
                    )
                })
                }
                <input value={user.name} onChange={onChangeUserName} />
                <button onClick={onClickAddUser}>Add user</button>
            </div>
        </div >
    );
};

const mapStateToProps = state => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addUser: (user) => { dispatch(addUser(user)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);