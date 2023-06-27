function total()
{
 var p=document.getElementById('prc').value;
 var q=document.getElementById('qty').value;
 var subtotal=p*q;
 document.getElementById('subtotal').innerHTML=+subtotal;
var d=(p*q)*10/100;
document.getElementById('dscnt').innerHTML=+d;
var t=subtotal-d;
document.getElementById('totl').innerHTML=+t;
}