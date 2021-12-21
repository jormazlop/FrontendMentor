import React from "react";
import styles from './app.scss';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@mui/material/Tooltip';

export const Application = () => {

  return <div className="app-container">      
            <div className="left-container">
              <img className="logo" src="./assets/logo.svg" alt="Logo" />
              <img className="mockup" src="./assets/illustration-mockups.svg" alt="Mockup" />
            </div>    
            <div className="right-container">
              <h1>Build The Community Your Fans Will Love</h1>
              <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
                 Create connections with your users as you engage in genuine discussion.
              </p>
              <button>Register</button>
              <div className="icons">
                <Tooltip title="Facebook" placement="top">
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebook} size="2x"/>
                  </div>
                </Tooltip>
                <Tooltip title="Twitter" placement="top">
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitter} size="2x"/>
                  </div>
                </Tooltip>
                <Tooltip title="Instagram" placement="top">
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
                  </div>
                </Tooltip>
              </div>
            </div>  
         </div>;
}