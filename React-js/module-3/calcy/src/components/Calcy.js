import React from 'react';
import {add,subs,mul,divi} from "./Calculation";

export default function Calculation() {
  return (
    <div className='calcy'>
        <center>
        <h1 style={{color:"red"}}>Calculation Here</h1>

        <button className='btn' style={{padding:"10px" ,margin:"5px" ,color:"white" ,backgroundColor:"blue" ,border:"none"}} onClick={add}>Addition</button>
        <button className='btn'  style={{padding:"10px" ,margin:"5px" ,color:"white" ,backgroundColor:"blue" ,border:"none"}} onClick={subs}>Substraction</button>
        <button className='btn'  style={{padding:"10px" ,margin:"5px" ,color:"white" ,backgroundColor:"blue" ,border:"none"}} onClick={mul}>Multiplication</button>
        <button className='btn'  style={{padding:"10px" ,margin:"5px" ,color:"white" ,backgroundColor:"blue" ,border:"none"}} onClick={divi}>Division</button>
        </center>
    </div>
  )
}
