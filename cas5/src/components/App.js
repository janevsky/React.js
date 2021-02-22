import { useState } from 'react';

const App = () => {
//hooks

//let c = 0;
const [counter, setCounter] = useState(0);

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
return (
  console.log('app'),
  <div className='app'>
      {/*<p>Counter: {c}</p>*/}
      <p>Counter: {counter}</p>
      <button onClick={onButtonClick}>Click me</button>
  </div>
)

};
export default App;
