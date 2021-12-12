import React from "react";
import styles from './card.scss';

export const Card = () => {
   return <div className="card-container">
            <img src="./assets/bg-pattern-card.svg" />
            <p> <strong>Victor Crest</strong> 26 <br />London</p>
            <hr />
            <div className="numbers-container">
               <div><h5>80K</h5><p>Followers</p></div>
               <div><h5>803K</h5><p>Likes</p></div>
               <div><h5>1.4K</h5><p>Photos</p></div>
            </div>
            <img className="image-user" src="./assets/image-victor.jpg" />
          </div>
}