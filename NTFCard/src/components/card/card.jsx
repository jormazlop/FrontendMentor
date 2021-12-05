import React from "react";
import styles from './card.scss';

export const Card = () => {

   return <div className='card-container'>  
            <img className="eq-image" src="./assets/image-equilibrium.jpg"/>
            <div className="hover"><img className="eq-view" src="./assets/icon-view.svg"/></div>
            <h2>Equilibrium #3492</h2>
            <h3>Our Equilibrium collection promotes balance and calm.</h3>
            <div className="icons-container">
               <div className="eth-container">
                  <img src="./assets/icon-ethereum.svg" /><h4>0.041 ETH</h4>
               </div>
               <div className="clock-container">
                  <img src="./assets/icon-clock.svg"/><h4>3 days left</h4>
               </div>
            </div>
            <div className="line"></div>
            <div className="creator-container">
            <img src="./assets/image-avatar.png"/><h4>Creation of <b>Jules Wyvern</b></h4>
            </div>
          </div>;
          
}