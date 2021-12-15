import React from "react";
import styles from './rating.scss';

export const Rating = () => {
   return <div className="rating-container">
            <div className="rating">
               <div>
                  <img src="./assets/icon-star.svg" alt="star" />
                  <img src="./assets/icon-star.svg" alt="star" />
                  <img src="./assets/icon-star.svg" alt="star" />
                  <img src="./assets/icon-star.svg" alt="star" />
                  <img src="./assets/icon-star.svg" alt="star" />
               </div>
               <h2>Rated 5 Stars in Reviews</h2>
            </div>
            <div className="rating">
               <div>
                  <img src="./assets/icon-star.svg" alt="star" />
                  <img src="./assets/icon-star.svg" alt="star" />
                  <img src="./assets/icon-star.svg" alt="star" />
                  <img src="./assets/icon-star.svg" alt="star" />
                  <img src="./assets/icon-star.svg" alt="star" />
               </div>
               <h2>Rated 5 Stars in Report Guru</h2>
            </div>
            <div className="rating">
               <div>
                  <img src="./assets/icon-star.svg" alt="star" />
                  <img src="./assets/icon-star.svg" alt="star" />
                  <img src="./assets/icon-star.svg" alt="star" />
                  <img src="./assets/icon-star.svg" alt="star" />
                  <img src="./assets/icon-star.svg" alt="star" />
               </div>
               <h2>Rated 5 Stars in BestTech</h2>
            </div>
          </div>;
}