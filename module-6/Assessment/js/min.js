// form validation

function valid()
{
    var  x = document.forms["frm"]["fname"].value;
   if(x =="")
    {
        alert("Please Enter Your Username..")
    }

    var y = document.forms["frm"]["lname"].value;
    if (y == "")
    {
        alert("Please Enter Your Lastname..")
    }

    var z = document.forms["frm"]["email"].value;
    if (z == "")
    {
        alert("Please Enter Your Email..")
    }

    var a = document.forms["frm"]["phn"].value;
    if (a == "")
    {
        alert("Please Enter Your Mobile Number..")
    }

    var b = document.forms["frm"]["gndr"].value;
    if (b == "")
    {
        alert("Please Enter Your Gender..")
    }

    var c = document.forms["frm"]["brthdt"].value;
    if (c == "")
    {
        alert("Please Enter Your Birthdate..")
    }

    var d = document.forms["frm"]["add"].value;
    if (d == "")
    {
        alert("Please Enter Your Address..")
    }

    var e = document.forms["frm"]["cty"].value;
    if (e == "")
    {
        alert("Please Enter Your City..")
    }

    var f = document.forms["frm"]["pin"].value;
    if (f == "")
    {
        alert("Please Enter Your Area Pin..")
    }

    var g = document.forms["frm"]["stat"].value;
    if (g == "")
    {
        alert("Please Enter Your State..")
    }

    var h = document.forms["frm"]["quali"].value;
    if (h == "")
    {
        alert("Please Enter Your Qualification..")
    }

    var i = document.forms["frm"]["splztn"].value;
    if (i == "")
    {
        alert("Please Enter Your Specialization..")
    }

    var j = document.forms["frm"]["pass"].value;
    if (j == "")
    {
        alert("Please Enter Your Password..")
    }
}