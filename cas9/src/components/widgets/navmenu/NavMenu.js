// vendor imports
import { Link } from 'react-router-dom';
// styles
import '../style.css';

const NavMenu = () => {
    return (
        <div className='navmenu-wrapper'>
            <div className='navmenu'>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Info'>Info</Link>
            <Link to='/Users'>Users</Link>
            <Link to='/'>Test</Link>
            </div>
        </div>
    );
};

export default NavMenu;