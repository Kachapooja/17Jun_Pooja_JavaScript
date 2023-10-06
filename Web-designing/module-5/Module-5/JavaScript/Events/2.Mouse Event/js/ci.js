function ci()
{
    var p= document.getElementById('pname').value;
    var y= document.getElementById('year').value;
    var r= document.getElementById('roi').value;
    var amount= p*(Math.pow(1+r/100,y));
     document.getElementById('result').innerHTML="Compound Interest :" +amount.toFixed(2);
}