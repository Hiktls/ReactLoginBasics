import axios from 'axios'; // Importing axios so we can make post request to backend and backend will send the information to database
import React, { useState } from 'react'
import './LoginForm.css'

const LoginForm = () => {

    const [emailValue,setEmailValue] = useState(''); // Default values
    const [passValue,setPasswordValue] = useState('');

    const handleEmailChange = (event) => {
        setEmailValue(event.target.value) // Set the value on change, this is so we can store value
    }

    const handlePassChange = (event) => {
        setPasswordValue(event.target.value) // Set the value on change, this is so we can store value
    }

    function handleRegister() {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue)) { // Check if the email is valid using regex
            axios.post("http://ec2-18-184-216-192.eu-central-1.compute.amazonaws.com/server/login", { 
                "email": emailValue,
                "password": passValue
            }).then(response => {
                if (response.data === "Logged in") { // If response is logged in,then we show the user that logging in was successful
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