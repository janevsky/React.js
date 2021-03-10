// vendor imports
import { Route } from 'react-router-dom';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Info from './pages/Info';
import Users from './pages/Users';


import NavMenu from './widgets/navmenu/NavMenu'
// styles
import '../assets/styles/global.css';

const App = () => {
  return (
    <>
    <NavMenu/>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route exact path='/info' component={Info} />
    <Route exact path='/users' component={Users} />
    
    </>
  );
}



export default App;
