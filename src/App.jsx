import React from "react";
import ReactDOM from "react-dom";
import TictactoeGame from "./components/TictactoeGame";

import "./index.scss";

const App = () => (
  <div className="container">
    <TictactoeGame/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
