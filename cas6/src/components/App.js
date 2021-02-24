import { useEffect, useState} from 'react';


const App = () => {

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [age, setAge] = useState(0);
const [gender, setGender] = useState('');
const [address, setAddress] = useState('');
const [showData, setShowdata] = useState(false);
const [counter, setCounter] = useState(0);

const onButtonClick = () => {
  setCounter(state => {
    return state +1;      
  });
  console.log('Button clicked', counter , 'times')
};
const onInputFirstName = (event) => {
  setFirstName(event.target.value);
};
const onInputLastName = (event) => {
  setLastName(event.target.value);
};
const onInputAge = (event) => {
  console.log(typeof event.target.value);
  setAge(parseInt(event.target.value));
};
const onInputGender = (event) => {
  setGender(event.target.value);
};
const onInputAddress = (event) => {
  setAddress(event.target.value);
};
const toggleData = () => {
  setShowdata(state => {
    return !state;
  });
};
  // userEffect hook
useEffect(() =>{
  console.log('toogle user data', showData);
}, [showData]);

useEffect(() => {
  if (age >= 18) {
    console.log('Age 18 or moree')
  } else console.warn('Must have 18+');
},[age]);

return (
  <div className='app'>
    <input type='text' name='firstName' placeholder='First name' value={firstName} onChange={onInputFirstName}/>
    <input type='text' name='lastName' placeholder='Last name' value={lastName} onChange={onInputLastName}/>
    <input type='number' name='age' placeholder='Age' value={age} onChange={onInputAge}/>
    <input type='text' name='gender' placeholder='Gender' value={gender} onChange={onInputGender}/>
    <input type='text' name='address' placeholder='Address' value={address} onChange={onInputAddress}/>

    <br/>
    <br/>
    <button onClick={toggleData}>Click to show</button>
    
    {showData && 
    <div id='userData'>
    <p>First Name: {firstName}</p>
    <p>Last Name: {lastName}</p>
    <p>Age: {age}</p>
    <p>Gender: {gender}</p>
    <p>Address: {address}</p>
    </div>
    }
    <br/>
    <br/>
    <button onClick={onButtonClick}>Counter button</button>
    <p>Counter: {counter}</p>


  </div>
);

};

export default App;