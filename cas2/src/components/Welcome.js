const Welcome = (props) => {
    // console.log('welcome props', props);    
    return (
        <div id='welcome'>
            <h3>Welcome {props.userName}</h3>
        </div>
    );
};

export default Welcome;