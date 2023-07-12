function lgnfrm()
{
    var a=document.getElementById('lgnas').value;

    if(a=="Manager")
    {
       window.location="manager.html";
    }
    else if(a=="Faculty")
    {
        window.location="faculty.html";
    }
    else if(a=="Developer")
    {
        window.location="developer.html";
    }
    else{
        document.write('something went wrong');
    }
}