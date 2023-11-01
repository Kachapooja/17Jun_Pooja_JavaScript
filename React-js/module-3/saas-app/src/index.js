import React from "react";
import ReactDOM from "react-dom/client";
import '../src/style.scss';

import Cart from './components/ShoppingCart';

const root = ReactDOM.createRoot(document.getElementById("Shop-Cart"));

root.render(
    <Cart />
)