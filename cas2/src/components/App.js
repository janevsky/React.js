import Welcome from './Welcome';
import Student from './Student';
import Comments from './Comments';

const App = () => {
  let name = 'Bojana';
  let name1 = 'Ivana';
  let name2 = 'Dushica';
  let student = {
    firstname: 'Ivana',
    lastname: 'Kozolovska',
    index: 131061
  };
  return (
    <div id='app'>
      {/* Task 01 - Create variable with your name. Pass the value from the variable as prop in the Welcome component. Display your name. */}
      <Welcome userName={name} />
      <Welcome userName={name1} />
      <Welcome userName={name2} />
      {/* Task 02 - Create student object. Pass the object as prop in the Student component. 
       Display the student details. */}
       <Student info={student}/>
       <Comments hasComments={true}/>
    </div>
  );
};

/* 
  Homework 02
  1. Create Car component that would display the car's model.
  2. Create variable for some car model. Pass the value from the variable as prop in the Car component. Display the car model.
  3. Implement 1 and 2 with three other car models.
  4. Create car object (type, model, color, doors number, hatchback  etc.).  Pass the object as prop in the Car component. Display the car details. 
  5. If hatchback is true, you should display the doors number increased by one.
*/

export default App;