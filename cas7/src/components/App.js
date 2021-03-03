import React, { useState } from 'react';
import UserDetailsWrapper from './UserDetailsWrapper';
import {userDetailsContext} from '../data/contexts/userDetailsContext';
import Login from './widgets/Login';


const App =() => {

  const [userDetails, setUserDetails] = useState({
    fname: 'Ivana',
    lname: 'Kozolovska'
  });

  return (
    <div className="app">
      <userDetailsContext.Provider value={userDetails}>
      {/*<UserDetailsWrapper data={userDetails}/>*/}
      <UserDetailsWrapper/>
      </userDetailsContext.Provider>

      {/* TASK 01 - IMPLEMENT SIMPLE LOGIN FORM */}

      <Login/>
    </div>
  );
};

export default App;
