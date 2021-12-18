import React from "react";
import styles from './card.scss';
import { darken } from '@material-ui/core/styles';

export const Card = (props) => {

  const cardColor = darken(props.color, 0);

   return <div className="card-container" style={{borderTop: '3px solid ' + props.color}}>
            <div className="card-text">
              <div className="card-content">
              <h1 className="card-title">{props.title}</h1>
              <p className="card-body">{props.body}</p>
              <img src={props.image} alt="Image" />
            </div>
            </div>
          </div>;

}