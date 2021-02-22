const Student = (props) => {
    // console.log(props);
    return (
        <div id='student'>
            <h3>Student info:</h3>
            <p>First name: {props.info.firstname}</p>
            <p>Last name: {props.info.lastname}</p>
            <p>Index: {props.info.index}</p>
        </div>
    );
};

export default Student;