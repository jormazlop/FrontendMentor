import React from "react";
import styles from './card.scss';

export const Card = (props) => {

   return <div className="card-container" style={{backgroundColor: props.color}}>
            <img src={props.image} />
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <button style={{color: props.color}}>Learn More</button>
          </div>;
}