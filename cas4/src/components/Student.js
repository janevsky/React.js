import PropTypes from 'prop-types';

const Student = (props) => {
    return (
        <div id='student'>
           <p>Age: {props.age}</p>
        </div>
    );
};

Student.propTypes = {
    age: PropTypes.number
};

export default Student;