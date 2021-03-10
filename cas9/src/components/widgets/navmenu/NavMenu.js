// vendor imports
import { Link } from 'react-router-dom';
// styles
import './style.css';

const NavMenu = () => {
    return (
        <div className='navmenu-wrapper'>
            <div className='navmenu'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/home/info'>Info</Link>
                <Link to='/users'>Users</Link>
            </div>
        </div>
    );
};

export default NavMenu;