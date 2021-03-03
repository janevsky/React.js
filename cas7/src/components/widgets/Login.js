// vendor imports
import {useState} from 'react';
// components
import Input from '../ui/Input';

const Login = () => {
    //eslint-disable-next-line
    const [form, setForm] = useState({
        username: '',
        passowrd: ''
    });

    const handleChange = (event) => {
        setForm(state => {
            return {
                ...state,
                [event.target.name]: event.target.value
            }
        });
    };

    return (
        console.log('username', form.username),
        console.log('passowrd', form.passowrd),
        <div id='login'>
            <form>
                <Input type='text'placeholder='username' name='username' value={form.username} onchange={handleChange} />
                <Input type='passowrd'placeholder='password' name='password'  value={form.passowrd} onchange={handleChange} />
            </form>
        </div>
    )
};

// prop types.

export default Login;