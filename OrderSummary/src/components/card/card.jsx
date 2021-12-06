import React from "react";
import styles from './card.scss';

export const Card = () => {
   return <div className="card-container"> 
            <img src="./assets/illustration-hero.svg"/>
            <h1>Order Summary</h1>
            <h4>You can now listen to millions of songs, audiobooks, and podcasts on any 
                device anywhere you like!
            </h4>
            <div className="plan-container">
              <img src="./assets/icon-music.svg" />
              <div>
                <b>Annual Plan</b>
                <br/>
                $59.99/year
              </div>
              <a href="#">Change</a>
            </div>
            <button className="payment-button">Proceed to Payment</button>
            <h6>Cancel Order</h6>
          </div>
}