// form validation

function valid()
{
    if(document.frm.email.value=="")
    {
        // alert('Please enter your email address');
        document.getElementById("error").innerHTML='Please eter your email address';
        document.frm.email.focus();
        return false;
    }

    var em=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!em.test(document.frm.email.value))
    {
        document.getElementById("error").innerHTML='Please eter your email address';
        document.frm.email.focus();
        return false; 
    }

    if(document.frm.password.value=="")
    {
        alert('please enter your Password')
        document.frm.password.focus();
        return false;
    }
}