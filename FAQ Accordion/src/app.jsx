import React from "react";
import styles from './app.scss';
import { Card } from "./components/card/card";

export const Application = () => {

  return <div className="app-container">
            <img className="box-image" src="./assets/illustration-box-desktop.svg"/>
            <Card />
         </div>;
}