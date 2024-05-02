import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';
import {
    Link,
} from "react-router-dom";

const Register = () => {
    const navigate=useNavigate()
    useEffect(() => {
        // Check for token in local storage
        const token = localStorage.getItem('token');
        if (token) {
          console.log("navigating to product")
          navigate('/Products'); // Redirect to dashboard if token exists
        }
      }, []);

    return(
       
        <div className="container">   
        <div className="login-form">  
            <div id="login-contain">
            <Link to="/">Login</Link>
                <div id="login-header">
                    
                    <div id="logo">
                        <img src="logo.jpg" alt="logo"/>
                    </div>
                </div>
                <h3 id="main-title">Register</h3>
                <p>Organization Name</p>
                <input type="text"/>
                <p>Email</p>
                <input type="text"/>
                <p>Password</p>
                <input type="text"/>
                <p>Renter Password</p>
                <input type="text"/>
                <p>Enter OTP</p>
                <input type="text"/>
                <div id="term-box">
                    <input type="checkbox" name="" id=""/>
                    <p>Terms and Conditions</p>
                </div>
                
                <button id="register-button">Register</button>
            </div>
        </div>
    </div>
       

    );
};
export default Register;