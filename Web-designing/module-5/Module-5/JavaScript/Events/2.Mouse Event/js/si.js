function si()
{
    var p=document.getElementById('pname').value;
    var y=document.getElementById('year').value;
    var r=document.getElementById('roi').value;
    var intrst=p*y*r/100;
    document.getElementById('result').innerHTML='Total Interest Rs. :' +intrst;
}