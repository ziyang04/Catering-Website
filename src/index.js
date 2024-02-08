import React from "react";
import ReactDOM from "react-dom";
import Main from "./main";
import reportWebVitals from "./reportWebVitals";
import ButtonLayout from "./ButtonLayout";

ReactDOM.render(
  <React.StrictMode>
    <ButtonLayout/>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
