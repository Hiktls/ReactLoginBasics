import axios from 'axios';
import React, { useState } from 'react' 
import './SignUpForm.css'
import config from '../../config.json'

const SignUpForm = () => {

    const [emailValue,setEmailValue] = useState(''); // Default values
    const [passValue,setPasswordValue] = useState('');

    const handleEmailChange = (event) => {
        setEmailValue(event.target.value) // Set the input on change, this is so we have control over the value
    }

    const handlePassChange = (event) => {
        setPasswordValue(event.target.value)
    }

    function handleRegister() {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue)) { // Email validation using regex
            axios.post(config.server.aws+"server/signup", {
                "email": emailValue,
                "password": passValue,
            }).then(response => {
                if (response.data === "Registiration Successful") { // Giving the user alerts about if registiration was successful or not
                    alert("You are registered!");
                }
                else if (response.data === "Registiration Failed") {
                    alert("You failed registiration");
                }
            });
        }
        else {
            alert("Wrong Email address!"); // Invalid Email address
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