import React from 'react';

function add() 
{
    var p=parseInt(prompt("Enter x value:"));
    var q=parseInt(prompt("Enter y value:"));
    var c=p+q;
    alert("Addition of value :" +c);
}

function subs() 
{
    var p=parseInt(prompt("Enter x value:"));
    var q=parseInt(prompt("Enter y value:"));
    var c=p-q;
    alert("Substractions of value :" +c);
}

function mul() 
{
    var p=parseInt(prompt("Enter x value:"));
    var q=parseInt(prompt("Enter y value:"));
    var c=p*q;
    alert("Multiplication of value :" +c);
}

function divi() 
{
    var p=parseInt(prompt("Enter x value:"));
    var q=parseInt(prompt("Enter y value:"));
    var c=p/q;
    alert("Division of value :" +c);
}

export{add,subs,mul,divi};
  
