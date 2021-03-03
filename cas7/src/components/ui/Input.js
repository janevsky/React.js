const Input = (props) => {
    return (
        <p>
            <input
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            />
        </p>
    );
};

export default Input;