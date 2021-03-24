// styles 
import './style.css';

const Error = (props) => {
    return (
       <span className='error-message'>{props.errorMessage}</span>
    );
};

export default Error;
