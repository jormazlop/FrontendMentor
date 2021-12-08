import React from "react";
import styles from './card.scss';

export const Card = () => {

   return <div className="card-container"> 
            <div className="left-container">
               <h2>Get <span>insights</span> that help your business grow.</h2>
               <h6>Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                   experience, and overall efficiency.</h6>
               <div className="numbers">
                  <h3>10k+ <span>companies</span></h3>
                  <h3>314 <span>templates</span></h3>
                  <h3>12m+ <span>queries</span></h3>
               </div>
            </div>
            <div className="right-container">
               <img src="./assets/image-header-desktop.jpg" />
            </div>
          </div>
}