import React from "react";
import styles from './app.scss';
import { Card } from "./components/card/card";

export const Application = () => {

  return <div className="app-container">
            <div className="text-container">
              <h1>Learn to code by watching others</h1>
              <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
                 but understanding how developers think is invaluable.</p>
            </div>
            <div className="card-container">
              <Card />
            </div>

         </div>;
}