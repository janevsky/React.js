// vendor imports
import React, { useState, useEffect } from 'react';
// components
import UserDetailsWrapper from './UserDetailsWrapper';
import Login from './widgets/Login';
// contexts
import { userDetailsContext } from '../data/contexts/userDetailsContext';
// styles
import '../assets/styles/global.css';
import '../assets/styles/style.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [showIncrementButton, setShowIncrementButton] = useState(true);
  const [userDetails, setUserDetails] = useState({
    fname: 'Ivana',
    lname: 'Kozolovska'
  });

  useEffect(() => {
    if (counter === 10) {
      setShowIncrementButton(false);
    } else if (counter === 0) {
      setShowIncrementButton(true);
    }
  }, [counter]);

  const onClickIncrement = () => {
    setCounter(state => {
      return state + 1;
    });
  };

  const onClickDecrement = () => {
    setCounter(state => {
      return state - 1;
    });
  };

  return (
    <div id='app'>
      {/* <p>Counter: {counter}</p>
      {showIncrementButton
        ?
        <button onClick={onClickIncrement}>+</button>
        :
        <button onClick={onClickDecrement}>-</button>
      } */}
      {/* <userDetailsContext.Provider value={userDetails}>
        {/* <UserDetailsWrapper data={userDetails} /> */}
      {/*<UserDetailsWrapper />
      </userDetailsContext.Provider> */}

      {/* Task 01 - Imlement simple login form */}
      <Login />
    </div>
  );
};

/* Homework 07
  1. Take a good look at the Login example and the css styles (there are some changes). 
  2. For the password input field implement the following scenario: On click on the eye-button you should toggle 
  whether the password is visible or hidden.
     * fa-eye-slash - hide password
     * fa-eye - show password 
  3. Create simple signup form. The form should be consisted of:
    * First name 
    * Last name 
    * Handle 
    * Email 
    * Password
    * 'Sign Up' button
  On click on the submit the button hide the form and show a success message (ex. 'User is successfully registered').

  ** Task 1 and 2 should be implemented over the example from the class. Task 3 is completely new task.
*/

export default App;
