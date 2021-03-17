// vendor imports 
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// actions
import { setUsers } from '../redux/ducks/users';
// components
import Home from '../components/pages/Home';
import Users from '../components/pages/Users';
import Stats from '../components/pages/Stats';
import NavMenu from '../components/widgets/navmenu/NavMenu';
// styles
import '../assets/styles/global.css';

const App = (props) => {
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setIsDataFetched(true);
        props.setUsers(data);
      })
      .catch(error => {
        setIsDataFetched(true);
        setError('Error fetching users');
      });
      // eslint-disable-next-line
  }, []);

  return (
    console.log('app props', props),
    isDataFetched
      ?
      error === ''
        ?
        <>
          <NavMenu />
          <Route exact path='/' component={Home} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/stats' component={Stats} />
        </>
        :
        <h2>{error}</h2>
      :
      <h2>Fetching data...</h2>
  );
};

const mapStateToProps = state => {
  console.log('state', state);
  return {
    users: state.users
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setUsers: (users) => { dispatch(setUsers(users)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
