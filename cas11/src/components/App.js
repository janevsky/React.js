// vendor imports
import { Route } from 'react-router-dom';
// pages
import NavMenu from './pages/widgets/navmenu/NavMenu';
import Posts from './pages/Posts';
import Users from './pages/Users';
// styles
import '../assets/styles/global.css';

const App = () => {
  return (
    <div className="App">
      <>
      <NavMenu />
      <Route exact path='/users' component={Users} />
      <Route exact path='/posts' component={Posts} />
      </>
    </div>
  );
}

export default App;
