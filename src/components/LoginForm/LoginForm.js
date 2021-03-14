import axios from 'axios';
import React, { useState } from 'react'
import './LoginForm.css'

const LoginForm = () => {

    const [emailValue,setEmailValue] = useState('');
    const [passValue,setPasswordValue] = useState('');

    const handleEmailChange = (event) => {
        setEmailValue(event.target.value)
    }

    const handlePassChange = (event) => {
        setPasswordValue(event.target.value)
    }

    function handleRegister() {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue)) {
            axios.post("http://localhost:8080/server/login", {
                "email": emailValue,
                "password": passValue
            }).then(response => {
                if (response.data === "Logged in") {
                    alert("You are logged in!!");
                }
                else if (response.data === "Failed") {
                    alert("You failed logging in!");
                }
            });
        }
        else {
            alert("Wrong Email address!");
        }
    }

    return(
        <div>
            <h1 className="title">Login</h1>
            <input value={emailValue} onChange={handleEmailChange} className="input email" type="email"></input>
            <input value={passValue} onChange={handlePassChange} className="input password" type="password"></input>

            <button onClick={handleRegister} className="login-button">Login</button>
        </div>
    );
}

export default LoginForm