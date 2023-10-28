import React from "react";
import  ReactDOM  from "react-dom/client";
// import HelloWorld from './HelloApp';   //(./"app-name"(hello-app))

// in import HelloWorld is a component name

import Calculator from './Calculator';

const root=ReactDOM.createRoot(document.getElementById("hello-app"));

root.render(

    // <HelloWorld/>
    <Calculator />
);