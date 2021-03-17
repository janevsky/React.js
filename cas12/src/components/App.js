// vendor imports 
import { Route } from 'react-router-dom';
// components
import Home from '../components/pages/Home';
import Users from '../components/pages/Users';
import Stats from '../components/pages/Stats';
import NavMenu from '../components/widgets/navmenu/NavMenu';
// styles
import '../assets/styles/global.css';

const App = () => {
  return (
    <>
      <NavMenu />
      <Route exact path='/' component={Home} />
      <Route exact path='/users' component={Users} />
      <Route exact path='/stats' component={Stats} />
    </>
  );
};

export default App;
