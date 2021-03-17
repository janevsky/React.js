//styles
import './style.css';

const Popup = (props) => {
    return (
        <div className='wrapper'>
            <div className='popup'>
            <span className='close'>&times;</span>
            <div className='content'>
            <p>ID: {props.album.id}</p>
            <p>Title: {props.album.title}</p>
            <p>User ID: {props.album.userId}</p>
            </div>
            </div>
        </div>
    );
};

export default Popup;