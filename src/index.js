import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greeting from "./component/ComponentHello";
import ContainerHello from "./container/ContainerHello";
import ComponentCount from "./component/ComponentCount";
import ContainerCount from "./container/ContainerCount";

ReactDOM.render(
  <React.StrictMode>
    {/*<Greeting name = "akbar"/>*/}
      <ContainerCount/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
