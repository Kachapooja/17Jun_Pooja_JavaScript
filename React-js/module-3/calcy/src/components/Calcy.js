import React from 'react';
import {add,subs,mul,divi} from "./Calculation";

export default function Calculation() {
  return (
    <div className='calcy'>
        <center>
        <h1>Calculation Here</h1>

        <button className='btn' onClick={add}>Addition</button>
        <button className='btn' onClick={subs}>Substraction</button>
        <button className='btn' onClick={mul}>Multiplication</button>
        <button className='btn' onClick={divi}>Division</button>
        </center>
    </div>
  )
}
