import PropTypes from 'prop-types';

const Student = (props) => {
  return (
    <div className='student'>
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lastName}</p>
        <p>Index: {props.index}</p>
    </div>
  );
};

Student.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    index: PropTypes.number
};

export default Student;
