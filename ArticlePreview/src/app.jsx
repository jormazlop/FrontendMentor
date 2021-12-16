import React from "react";
import styles from './app.scss';
import { Article } from "./components/article/article";

export const Application = () => {

  return <>
         <div className="app-container">
           <Article />
         </div>
         </>;
}