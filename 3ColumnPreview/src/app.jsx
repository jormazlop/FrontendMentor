import React from "react";
import styles from './app.scss';
import { Card } from "./components/card/card";

export const Application = () => {

  const img1 = './assets/icon-sedans.svg';
  const title1 = 'Sedans';
  const text1 = 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
  const color1 = 'hsl(31, 77%, 52%)';

  const img2 = './assets/icon-suvs.svg';
  const title2 = 'SUVs';
  const text2 = 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
  const color2 = 'hsl(184, 100%, 22%)';

  const img3 = './assets/icon-luxury.svg';
  const title3 = 'Luxury';
  const text3 = 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
  const color3 = 'hsl(179, 100%, 13%)';

  return <div className="app-container">
            <div className="cards-container">
              <Card text={text1} title={title1} image={img1} color={color1}/>
              <Card text={text2} title={title2} image={img2} color={color2}/>
              <Card text={text3} title={title3} image={img3} color={color3}/>
            </div>
         </div>;
}