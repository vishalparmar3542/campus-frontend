// Header.js

import React from 'react';
import axios from 'axios';
import "../styles/Header1.css";
import Logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate();
  const handleRegisteredProducts = () => {
   
    // Call API for registered products
    navigate("/Products")
  };

  const handleExpiringProducts = () => {
    // Call API for expiring products
     navigate("/FilterProducts")
  };

  const handleLogout = () => {
    // Call API for logout
    const token=localStorage.getItem("token")
    console.log(token)
    if(token){
    localStorage.removeItem("token");
    navigate("/");
    }
  };

  return (
    <div>
      <header className="header">
        <div className="header-content">

          <div className="logo">
            <img src={Logo} alt="Compass Logo" />
          </div>
          <div className="buttons">
            <div><button onClick={handleRegisteredProducts}>Registered Products</button></div> 
            <div><button onClick={handleExpiringProducts}>Expiring Products</button></div>   
          </div>
          <div className="left">
            <div>
              <h4><b>Welcome, Bhanupratap Singh,</b></h4>
              <h6><span>pratapsinghbhanu@gmail.com</span></h6>
            </div>
            <div><button onClick={handleLogout}>Logout</button></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
