import React from "react";
import ReactDOM from "react-dom/client";
import '../src/style.scss';

import Appointment from '../src/components/AppointmentApp';

const root = ReactDOM.createRoot(document.getElementById("sass-app"));

root.render(
    <Appointment />
)