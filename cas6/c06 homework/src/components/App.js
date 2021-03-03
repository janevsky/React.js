import { useState, useEffect } from 'react';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [showData, setShowData] = useState(true);
  const [counter, setCounter] = useState(0);
  const [showIncrementButton, setshowIncrementButton] = useState(true);

  // useEffect hook
  useEffect(() => {
    if (counter === 10) {
    setshowIncrementButton(false);
  } else if (counter === 0) {
    setshowIncrementButton(true);
  }
}, [counter]);
  useEffect(() => {
    console.log('toggle user data', showData);
  }, [showData]);

  const onChangeFirstName = (event) => {
    console.log(event);
    setFirstName(event.target.value);
  };

  const onChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeGender = (event) => {
    setGender(event.target.value);
  };

  const toggleData = () => {
    setShowData(state => {
      return !state;
    });
  };

  const onClickIncrement = () => {
    setCounter(state => {
      return state - 1;
    });
  };

  const onClickDecrement = () => {
    setCounter(state => {
      return state - 1;
    });
  };

  return (
    <div className='app'>     

      <input type='text' name='firstName' placeholder='First name' value={firstName} onChange={onChangeFirstName} />
      <input type='text' name='lastName' placeholder='Last name' value={lastName} onChange={onChangeLastName} />
      <input type='text' name='address' placeholder='Address' value={address} onChange={onChangeAddress} />
      <input type='number' name='age' placeholder='Age' value={age} onChange={onChangeAge} />
      <input type='text' name='gender' placeholder='Gender' value={gender} onChange={onChangeGender} />

      <br />
      <button onClick={toggleData}>Click me</button>

      {showData &&
        <div id='user data'>
          <p>First name: {firstName}</p>
          <p>Last name: {lastName}</p>
          <p>Address: {address}</p>
          <p>Age: {age}</p>
          <p>Gender: {gender}</p>
        </div>
      }
<div className='buttons'>
  <p>Counter: {counter}</p>

  {showIncrementButton
  ?
  <button onClick={onClickIncrement}>+</button>
  :
  <button onClick={onClickDecrement}>-</button>
  }  
</div>
      
      {/* Task 01 - Define counter. Show the value of the counter. 
      On a click on a button increment the counter. Show the result. */}

      {/* Task 02 - From the previous example, change the value for the age data for 
      the user. If the age is greater than 18 show the age, else show message 
      that the user must be +18 to submit the form.*/}
    </div>
  );
};

/* Homework 06
  1. Extend the previous homework with the following scenario (If you haven't done the previous homework, you should do it now!).
     Change the label on the toggle button to:
      * Show data - if showData is false
      * Hide data - if showData if true
     The task should be implemented with useState and useEffect hooks.
  2. Create one counter variable. Create two buttons that will increment/decrement the value of the counter respectively.
     Show the result.
  3. Implement the following scenario:
      * If the value of the counter is equal to 10 - hide the increment button ( the counter should never be greater than 10 ).
      * If the value of the counter is equal to 0 - hide the decrement button  ( the counter should never be smaller than 0 ).
     Only one button should be displayed at a given time. 
     The task should be implemented with useState and useEffect hooks.

*/

export default App;
