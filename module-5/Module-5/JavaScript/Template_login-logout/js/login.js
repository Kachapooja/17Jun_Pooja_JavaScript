
// login here form

function loginhere()
{
    var mb=document.getElementById("email").value;
    var pswrd=document.getElementById("pass").value;
    if(mb=="malvipoo2205@gmail.com" && pswrd=="8758046704")
    {
        alert('You are sucessfully Logged in')
        window.location='welcome_board.html';
    }
    else
    {
        alert('Your mobile and password are incorrect please try again');
        window.location='index.html';
    }
}


// logged out form

function logout()
{
    alert('You are Logout suceesfully')
    window.location='index.html';
}