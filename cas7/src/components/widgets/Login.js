// vendor imports
import { useState } from 'react';
// components
import Input from '../ui/Input';

const Login = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    const [isFromSubmited, setIsFromSubmited] = useState(false);

    const handleChange = (event) => {
        setForm(state => {
            return {
                ...state, // !!!
                [event.target.name]: event.target.value
            }
        });
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
        setIsFromSubmited(true);
    };

    return (
        <div id='login'>
            <form onSubmit={submitForm}>
                <Input
                    type='text'
                    placeholder='username'
                    name='username'
                    value={form.username}
                    onChange={handleChange}
                />
                <Input
                    type='password'
                    placeholder='password'
                    name='password'
                    value={form.password}
                    onChange={handleChange}
                />
                <button type='submit' className='submit-button'>Sign In</button>
            </form>
            {isFromSubmited && <p>{form.username} - {form.password}</p>}
        </div>
    );
};

export default Login;