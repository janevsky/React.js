// styles 
import './style.css';

const Button = (props) => {
    return (
        <button className='button' onClick={props.onClick} disabled={props.disabled}>{props.label}</button>
    );
};

export default Button;
