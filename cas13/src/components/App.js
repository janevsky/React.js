// vendor imports
import { connect } from 'react-redux';
// components
import OrderCakes from './widgets/OrderCakes';
import RestoreCakes from './widgets/RestoreCakes';
// styles 
import '../assets/styles/global.css';

const App = (props) => {
  console.log('app props', props);
  return (
    <div className='app'>
      <div className='cakes-wrapper'>
        <h2 className='title'>Available cakes: {props.cakes}</h2>
        <OrderCakes />
        <RestoreCakes />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('redux state', state);
  return {
    cakes: state.cakes
  }
};

export default connect(mapStateToProps)(App);
