import React from "react";

import ReactDOM from "react-dom/client";
import '../src/style.scss';

import Calculator from '../src/Calculator';

const root=ReactDOM.createRoot(document.getElementById("Calcy"));

root.render(
    <Calculator />
)