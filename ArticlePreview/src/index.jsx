import React from "react";
import ReactDOM from "react-dom";
import {Application} from './app';

ReactDOM.render(
  <div>
    <div className="background">
      <div className="background-top"></div>
      <div className="background-bottom"></div>
    </div>
    <Application />
  </div>,
  document.getElementById("root")
);

