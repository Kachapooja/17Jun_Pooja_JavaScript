
// clear function

function clr()
{
    document.getElementById("result").value="";
}

// bnack function

function bck()
{
    var p=document.getElementById("result").value;
    var q=p.slice(0,-1);
    document.getElementById("result").value=q;
}

// display button value

function display(val)
{
    document.getElementById("result").value+=val;
}

// final result

function finalresult()
{
    var a= document.getElementById("result").value;
    var b= eval(a);
    document.getElementById("result").value=b;

}

// x-square

function sqr()
{
    var s=document.getElementById("result").value;
    var t=Math.pow(s,2);
    document.getElementById("result").value=t;
}

// x-square-root

function sqart()
{
    var c=document.getElementById("result").value;
    var d=Math.sqrt(c);
    document.getElementById("result").value=d;
}

// x-half

function hlf()
{
    var hf=document.getElementById("result").value;
    var onehf=1/hf;
    document.getElementById("result").value=onehf;
}