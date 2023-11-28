import React from 'react';
import ReactDOM from 'react-dom/client';
import ContainerApp from  "./components/ContainerApp";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BtnApp from "./components/BtnApp";


// import './style.css';


const root = ReactDOM.createRoot(document.getElementById('root-app'));
root.render(
  <React.StrictMode>

    <ContainerApp />
    <BtnApp/>

  </React.StrictMode>
);


