import React from "react";

import ReactDOM from "react-dom/client";
import '../src/components/style.scss';

import Calculator from './components/Calculator';

const root=ReactDOM.createRoot(document.getElementById("Calcy"));

root.render(
    <Calculator />
)