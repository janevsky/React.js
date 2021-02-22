import React from 'react';
import Goodbye from './Goodbye';

/* class App extends React.Component {
  render() {
    return (
      <h2>Hello from class component</h2>
    )
  }
}; */

const App = () => {
  let name = 'Ivana';
  return (
    <div id='app'>
      <h2>Hello {name}</h2>
      {/* Task 1 - Define two numbers. Implement some basic arithmetic operations. 
      Display the result. */}
      <span>5 + 3 = {5 + 3}</span>
      {/* Task 2 - Create separete component. Display the content from the component. */}
      <Goodbye />
    </div>
  );
};

export default App;
