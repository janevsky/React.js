import { useState } from 'react';
// eslint-disable-next-line
import Student from './Student';

const App = () => {
  // let fName = 'Ivana';
  // let lName = 'Kozolovska';
  // let index = 131061;

//hooks

//let c = 0;
const [counter, setCounter] = useState(0);
const [username, setUsername] = useState('');
const [picCounter, setCounterPic] = useState(0);

const onButtonClick = () => {
  // c+= 5;
  // c++;
  //counter++; !!!
  setCounter(state => {
    //console.log('state', state);
    return state +1;
  }
  );
  //setCouner(counter + 1); !!!! <--- nikako, radi al se ne cue!
  console.log('on button clicked', counter);
};

const onButtonClick1 = () => {
  console.log(username);
}
const onButtonClickPicture = () => {
  setCounterPic(state => {
    
    return state +1;
    
  });
  console.log('Picture clicked', picCounter ,'times')
};

const onChangeUsername = (event) => {
  setUsername(event.target.value)
};

return (
  
  <div className='app'>
     {/*  <Student
        firstName={fName}
        lastName={lName}
        index={index}
      /> */}
      {/*<p>Counter: {c}</p>*/}
      <p>Counter: {counter}</p>
      <button onClick={onButtonClick}>Click me</button>
      <br/>
      <br/>
      <input type='text' placeholder='username' value={username} onChange={onChangeUsername}/>
      {/* Task 01 - Add new button. On click on the button show the value from the input field. */}
      <button onClick={onButtonClick1}>Click me</button>
      <br/>
      <br/>
      <hr></hr>
      <br/>
      <br/>
      <img onClick={onButtonClickPicture}
     src='https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
     alt='Back to the future'/>
     <br/>
     <br/>
     <h6>Click the picture to count the clicks</h6>
     <p>Picture clicks: {picCounter}</p>
  </div>
  
);


};

/* Homework 05
   1. Create input fields for person's first name, last name, age, address, gender. Display the data.
   2. Create a button that will show/hide (toggle) the person info.
   <img
     src='https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
     alt='Back to the future'
   />
 
   3. For the given photo, implement function that will handle how many times the image has been clicked. Show the result. 
 */

export default App;