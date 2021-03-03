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
            {props.name === 'password' &&
                <button type='button' className='eye-button' >
                    {/* 
                        fa-eye-slash - hide password
                        fa-eye - show password 
                    */}
                    <i className={`fa ${props.type === 'password' ? 'fa-eye-slash' : 'fa-eye'}`} />
                </button>
            }
        </p>
    );
};

// prop types

export default Input;