import React from "react";
import styles from './app.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Tooltip from '@mui/material/Tooltip';

export const Application = () => {

  return <div className="app-container">
            <img src="./assets/logo.svg" alt="Logo" />
            <h1>We are launching <span>soon!</span></h1>
            <h2>Subscribe and get notified</h2>
            <div className="address">
              <input type="text" placeholder="Your email address.."/>
              <button>Notify Me</button>
            </div>
            <img className="dashboard" src="./assets/illustration-dashboard.png" alt="Dashboard" />
            <div className="icons">
              <Tooltip title="Facebook" placement="top">
                <i className="fa fa-facebook"></i>
              </Tooltip>
              <Tooltip title="Twitter" placement="top">
                <i className="fa fa-twitter"></i>
              </Tooltip>
              <Tooltip title="Instagram" placement="top">
                <i className="fa fa-instagram"></i>
              </Tooltip>
            </div>
            
            <p> &#169; Copyright Ping. All rights reserved.</p>
            
         </div>;
}