//styles
import './style.css';

const Popup = (props) => {
    return (
        <div className='popup'>
            <button className='close'>x</button>
            <p>ID: {props.album.id}</p>
            <p>Title: {props.album.title}</p>
            <p>User ID: {props.album.userId}</p>
        </div>
    );
};

export default Popup;