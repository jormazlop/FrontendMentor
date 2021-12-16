import React from "react";
import styles from './article.scss';
import { Popover } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";

export const Article = () => {

   const popover = (
      <Popover id="popover-basic">
        <Popover.Body>
          <div className="popover-container">
             <h1>S H A R E</h1>
             <img src="./assets/icon-facebook.svg" alt="Facebook" />
             <img src="./assets/icon-twitter.svg" alt="Twitter" />
             <img src="./assets/icon-pinterest.svg" alt="Pinterest" />
          </div>
        </Popover.Body>
      </Popover>
    );

   return <div className="article-container">
            <img src="./assets/drawers.jpg" alt="Drawers" />
            <div className="article-right">
               <h1>Shift the overall look and feel by adding these wonderful 
                   touches to furniture in your home
               </h1>
               <p>Ever been in a room and felt like something was missing? Perhaps 
                  it felt slightly bare and uninviting. I’ve got some simple tips 
                  to help you make any room feel complete.
               </p>
               <div className="author">
                  <img className="avatar" src="./assets/avatar-michelle.jpg" alt="Michelle" />
                  <p className="name"> <strong>Michelle Appleton</strong><br />
                     28 Jun 2020
                  </p>
                  <OverlayTrigger trigger="click" rootClose placement="top" overlay={popover}>
                     <button><img className="share" src="./assets/icon-share.svg" alt="Share" /></button>
                  </OverlayTrigger>
               </div>
            </div>
          </div>;
}