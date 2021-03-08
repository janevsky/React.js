// vendor imports
import { useState } from 'react';
import formik from 'formik';
// components
import Input from '../ui/Input';
// helpers
import validationFunctions from '../../services/helpers/formValidations';

const Login = () => {
    const [form, setForm] = useState({
        username: '',
        usernameErrorMsg: '',
        password: '',
        passwordErrorMsg: ''
    });
    const [isFromSubmited, setIsFromSubmited] = useState(false);
    const [passwordType, setPasswordType] = useState('password');

    const handleChange = (event) => {
        setForm(state => {
            return {
                ...state, // !!!
                [event.target.name]: event.target.value
            }
        });
    };

    const toggleType = () => {
        setPasswordType(passwordType === 'password' ? 'text' : 'password');
    };

    /**
     * form = {
     * username,
     * password
     * };
     * 
     * form = {
     * username
     * }
     * 
     * form = {
     * password
     * }
     */

    const submitForm = (event) => {
        event.preventDefault(); // !!!
        setForm(state => {
            return {
                ...state,
                usernameErrorMsg: '',
                passwordErrorMsg: ''
            }
        });
        let validateUsername = validationFunctions.validateUsername(form.username);
        let validatePassword = validationFunctions.validatePassword(form.password);

        if (!validateUsername.valid) {
            // set username error
            setIsFromSubmited(false);
            setForm(state => {
                return {
                    ...state,
                    usernameErrorMsg: validateUsername.errorMsg
                }
            });
        } else if (!validatePassword.valid) {
            // set password error
            setIsFromSubmited(false);
            setForm(state => {
                return {
                    ...state,
                    passwordErrorMsg: validatePassword.errorMsg
                }
            });
        } else {
            // form is valid
            setIsFromSubmited(true);
        }
    };

    return (
        <div id='login'>
            {!isFromSubmited
                ?
                <form onSubmit={submitForm}>
                    <Input
                        type='text'
                        placeholder='username'
                        name='username'
                        value={form.username}
                        onChange={handleChange}
                        error={form.usernameErrorMsg}
                    />
                    <Input
                        type={passwordType}
                        placeholder='password'
                        name='password'
                        value={form.password}
                        onChange={handleChange}
                        toggle={toggleType}
                        error={form.passwordErrorMsg}
                    />
                    <button type='submit' className='submit-button'>Sign In</button>
                </form>
                :
                <p>The form is valid.</p>
            }

            {/* Taks 01 - Write validation function for the password input field.
                * required
                * min 2 characters
                * max 10 characters
            */}

            {/* Taks 02 - Set error message for the password input field. */}
            {/* formik & yup */}
        </div>
    );
};

export default Login;