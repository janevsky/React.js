// vendor imports
import { connect } from 'react-redux';

const Users = (props) => {
    // const [users, setUsers] = useState([]);
    // setUsers(data);
    /*  setCounter = (state => {
        return [];
    }); */
    // car.model = 'Audi'; !!!

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
            </div>
        </div >
    );
};

const mapStateToProps = state => {
    return {
        users: state.users
    }
};

export default connect(mapStateToProps)(Users);