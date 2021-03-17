// vendor imports
import { Link } from 'react-router-dom';
// styles
import './style.css';

const NavMenu = () => {
    return (
        <div className='navmenu-wrapper'>
            <div className='navmenu'>
                <Link to='/'>Home</Link>
                <Link to='/users'>Users</Link>
                <Link to='/stats'>Stats</Link>
            </div>
        </div>
    );
};

export default NavMenu;