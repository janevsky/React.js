// components
import DisplayUserDetails from './DisplayUserDetails';

const UserDetailsWrapper = () => {
    return (
        <div>
            <h2>This is wrapper</h2>
            {/* <DisplayUserDetails data={props.data}/>*/}
            <DisplayUserDetails />
        </div>
    );
};

export default UserDetailsWrapper;