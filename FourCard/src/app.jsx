import React from "react";
import styles from './app.scss';
import { Card } from "./components/card/card";

export const Application = () => {

  const card1 = {
    title: "Supervisor",
    color: "hsl(180, 62%, 55%)",
    body: "Monitors activity to identify project roadblocks",
    image: "./assets/icon-supervisor.svg"
  }

  const card2 = {
    title: "Team Builder",
    color: "hsl(0, 78%, 62%)",
    body: "Scans our talent network to create the optimal team for your project",
    image: "./assets/icon-team-builder.svg"
  }

  const card3 = {
    title: "Karma",
    color: "hsl(34, 97%, 64%)",
    body: "Regularly evaluates our talent to ensure quality",
    image: "./assets/icon-karma.svg"
  }

  const card4 = {
    title: "Calculator",
    color: "hsl(212, 86%, 64%)",
    body: "Uses data from past projects to provide better delivery estimates",
    image: "./assets/icon-calculator.svg"
  }

  return <div className="app-container">
            <div className="title-container">
              <h1><span>Reliable, efficient delivery</span></h1>
              <h1>Powered by Technology</h1>
              <p>Our Artificial Intelligence powered tools use millions of project data points 
                to ensure that your project is successful
              </p>
            </div>

            <div className="cards-container">
              <div className="card1">
                <Card color={card1.color} title={card1.title} body={card1.body} image={card1.image}/>
              </div>
              <div className="card2">
                <Card color={card2.color} title={card2.title} body={card2.body} image={card2.image}/>
              </div>
              <div className="card3">
                <Card color={card3.color} title={card3.title} body={card3.body} image={card3.image}/>
              </div>
              <div className="card4">
                <Card color={card4.color} title={card4.title} body={card4.body} image={card4.image}/>
              </div>
            </div>
         </div>;
}