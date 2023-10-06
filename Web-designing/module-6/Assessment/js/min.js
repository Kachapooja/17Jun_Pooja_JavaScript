// date picker

$(document).ready(function(){

    $('#date-picker').datepicker();

});


// form validation

function valid()
{
    var  x = document.forms["frm"]["fname"].value;
   if(x =="")
    {
        alert("Please Enter Your Username..")
        document.frm.fname.focus();
        return false;
    }

    var y = document.forms["frm"]["lname"].value;
    if (y == "")
    {
        alert("Please Enter Your Lastname..")
        document.frm.lname.focus();
        return false;
    }

    var z = document.forms["frm"]["email"].value;
    if (z == "")
    {
        alert("Please Enter Your Email..")
        document.frm.email.focus();
        return false;
    }

    var a = document.forms["frm"]["phn"].value;
    if (a == "")
    {
        alert("Please Enter Your Mobile Number..")
        document.frm.phn.focus();
        return false;
    }

    var b = document.forms["frm"]["gndr"].value;
    if (b == "")
    {
        alert("Please Enter Your Gender..")
        document.frm.gndr.focus();
        return false;
    }

    var c = document.forms["frm"]["brthdt"].value;
    if (c == "")
    {
        alert("Please Enter Your Birthdate..")
        document.frm.brthdt.focus();
        return false;
    }

    var d = document.forms["frm"]["add"].value;
    if (d == "")
    {
        alert("Please Enter Your Address..")
        document.frm.add.focus();
        return false;
    }

    var e = document.forms["frm"]["cty"].value;
    if (e == "")
    {
        alert("Please Enter Your City..")
        document.frm.cty.focus();
        return false;
    }

    var f = document.forms["frm"]["pin"].value;
    if (f == "")
    {
        alert("Please Enter Your Area Pin..")
        document.frm.pin.focus();
        return false;
    }

    var g = document.forms["frm"]["stat"].value;
    if (g == "")
    {
        alert("Please Enter Your State..")
        document.frm.stat.focus();
        return false;
    }

    var h = document.forms["frm"]["quali"].value;
    if (h == "")
    {
        alert("Please Enter Your Qualification..")
        document.frm.quali.focus();
        return false;
    }

    var i = document.forms["frm"]["splztn"].value;
    if (i == "")
    {
        alert("Please Enter Your Specialization..")
        document.frm.splztn.focus();
        return false;
    }

    var j = document.forms["frm"]["pass"].value;
    if (j == "")
    {
        alert("Please Enter Your Password..")
        document.frm.pass.focus();
        return false;
    }
}