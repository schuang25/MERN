import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const LoginReg = (props) => {
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const [userNameRegister, setUserNameRegister] = useState("");
    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    
    const login = (e) => {
        e.preventDefault();
        const user = {
            email: emailLogin,
            password: passwordLogin
        };
        axios.post("http://localhost:8000/api/login", user, {withCredentials: true})
            .then(res => {
                console.log(res.data);
                setErrors([]);
                history.push('/dashboard');
            })
            .catch(err => {
                console.log(err.response.data);
                setErrors(err.response.data.errors);
            })
    };
    
    const register = (e) => {
        e.preventDefault();
        const user = {
            userName: userNameRegister,
            email: emailRegister,
            password: passwordRegister,
            confirmPassword
        };
        axios.post("http://localhost:8000/api/register", user, {withCredentials: true})
            .then(res => {
                console.log(res.data);
                setErrors([]);
                history.push('/dashboard');
            })
            .catch(err => {
                console.log(err.response.data);
                const {errors} = err.response.data;
                const messages = Object.keys(errors).map(error => errors[error].message)
                console.log(messages);
                setErrors(messages);
            })
    };

    return (
        <div>
            {errors.length > 0 ? errors.map((error, i) =>
                <p style={{ color: 'red' }} key={i}>{error}</p>
            )
                : ''
            }
            <h2>Login</h2>
            <form onSubmit={login}>
                <p>
                    <label>Email:</label><br />
                    <input type="text" onChange={(e) => setEmailLogin(e.target.value)} value={emailLogin} />
                </p>
                <p>
                    <label>Password:</label><br />
                    <input type="password" onChange={(e) => setPasswordLogin(e.target.value)} value={passwordLogin} />
                </p>
                <input type="submit" value="Login" />
            </form>

            <h2>Register</h2>
            <form onSubmit={register}>
                <p>
                    <label>Username: </label><br />
                    <input type="text" onChange={(e) => setUserNameRegister(e.target.value)} value={userNameRegister} />
                </p>
                <p>
                    <label>Email:</label><br />
                    <input type="text" onChange={(e) => setEmailRegister(e.target.value)} value={emailRegister} />
                </p>
                <p>
                    <label>Password:</label><br />
                    <input type="password" onChange={(e) => setPasswordRegister(e.target.value)} value={passwordRegister} />
                </p>
                <p>
                    <label>Confirm Password:</label><br />
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                </p>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default LoginReg;