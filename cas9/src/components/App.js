// vendor imports
import { Route } from 'react-router-dom';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Info from './pages/Info';
import Users from './pages/Users';
import NavMenu from './widgets/navmenu/NavMenu';
// styles
import '../assets/styles/global.css';

const App = (props) => {
  return (
    <>
      <NavMenu />
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      {/* Task 01 - Create About route */}
      <Route exact path='/about' component={About} />
      {/* Task 02 - Create About nav menu link */}
      {/* Task 03 - Create info route  path='/home/info' */}
      <Route exact path='/home/info' component={Info} />
      <Route exact path='/users' component={Users} />
    </>
  );
};

/* Homework 09
  1. Create navigation menu with three pages - Users, Posts, Comments.
  2. From https://jsonplaceholder.typicode.com/.
     * fetch all users
     * fetch all posts from the user with id = 1
     * fetch all comments for the post with id = 1
  3. Display the corresponding data on each of the pages.
*/

export default App;
