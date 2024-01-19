function valid()
{
    if(document.frm.name.value=="")
    {
        document.frm.name.focus();
        return false;
    }

    var em=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!em.test(document.frm.email.value))
    {
        // document.getElementById("error").innerHTML="Please enter valid email Address";
        document.frm.email.focus();
        return false;

    }

    if(document.frm.password.value=="")
    {
        // alert('please enter your Password')
        document.frm.password.focus();
        return false;

    }
}    


// function sumbit()
// {
//     var mob=document.getElementById("mobile").value;
//     var pwd=document.getElementById("pass").value;
//     if(mob=="9998003879" && pwd=="9998003879")
//     {
//         alert('You are successfully Logged in')
//         window.location='dashboard.html'; 
//     }
//     else 
//     {

//         alert('Your mobile and password are incorrect try again')
//         window.location='index.html';
//     }
// }