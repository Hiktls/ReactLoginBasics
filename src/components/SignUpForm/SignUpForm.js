import axios from 'axios';
import React, { useState } from 'react'
import './SignUpForm.css'

const SignUpForm = () => {

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
            axios.post("http://localhost:8080/server/signup", {
                "email": emailValue,
                "password": passValue,
            }).then(response => {
                if (response.data === "Registiration Successful") {
                    alert("You are registered!");
                }
                else if (response.data === "Registiration Failed") {
                    alert("You failed registiration");
                }
            });
        }
        else {
            alert("Wrong Email address!");
        }
    }

    return(
        <div>
            <h1 className="title">Sign Up!</h1>
            <input value={emailValue} onChange={handleEmailChange} className="input email" type="email"></input>
            <input value={passValue} onChange={handlePassChange} className="input password" type="password"></input>

            <button onClick={handleRegister} className="signup-button">Sign Up!</button>
        </div>
    );
}

export default SignUpForm