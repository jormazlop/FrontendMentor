import React from "react";
import styles from './card.scss';

export const Cards = () => {
   return <div className="cards-container">
            <div className="card">
               <img src="./assets/image-colton.jpg" alt="Colton" />
               <h2>Colton Smith<br /><span>Verified Buyer</span></h2>
               <p>"We needed the same printed design as the one we had ordered a week prior.
                   Not only did they find the original order, but we also received it in time.
                   Excellent!"
               </p>
            </div>
            <div className="card">
               <img src="./assets/image-irene.jpg" alt="Irene" />
               <h2>Irene Roberts<br /><span>Verified Buyer</span></h2>
               <p>"Customer service is always excellent and very quick turn around. Completely
                   delighted with the simplicity of the purchase and the speed of delivery."
               </p>
            </div>
            <div className="card">
               <img src="./assets/image-anne.jpg" alt="Anne" />
               <h2>Anne Wallace<br /><span>Verified Buyer</span></h2>
               <p>"Put an order with this company and can only praise them for the very high
                  standard. Will definitely use them again and recommend them to everyone!"</p>
            </div>
          </div>;
}