// vendor imports
import { Link } from 'react-router-dom';

// styles
import './style.css';

const NavMenu = () => {
    return (
        <div className='navmenu-wrapper'>
            <div className='navmenu'>
                <Link to='/users'>Users</Link>
                <Link to='/posts'>Posts</Link>
            </div>
        </div>
    );
};

export default NavMenu;