import { useState } from 'react';

const App = () => {
//hooks

//let c = 0;
const [counter, setCounter] = useState(0);
const [username, setUsername] = useState('');

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

const onChangeUsername = (event) => {
  setUsername(event.target.value)
};

return (
  console.log('app'),
  <div className='app'>
      {/*<p>Counter: {c}</p>*/}
      <p>Counter: {counter}</p>
      <button onClick={onButtonClick}>Click me</button>
      <br/>
      <br/>
      <input type='text' placeholder='username' value={username} onChange={onChangeUsername}/>
      <button onClick={onButtonClick1}>Click me</button>
  </div>
);

};
export default App;
