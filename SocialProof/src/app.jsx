import React from "react";
import styles from './app.scss';
import { Cards } from "./components/cards/cards";
import { Products } from "./components/products/products";
import { Rating } from "./components/rating/rating";

export const Application = () => {

  return <>
         <div className="app-container">
           <Products />
           <Rating />
           <Cards />
         </div>
         </>;
}