import React from "react";
import styles from './app.scss';
import { Card } from "./components/card/card";

export const Application = () => {

  return <div className="app-container">
          <img className="top" src="./assets/bg-pattern-top.svg" />
          <img className="bottom" src="./assets/bg-pattern-bottom.svg" />
          <Card />
         </div>;
}