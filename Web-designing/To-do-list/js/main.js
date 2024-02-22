
// navbar-toggler js

const menu=document.querySelector('#menu');
const btnToggle=document.querySelector('#btn-toggle');
const menuList=document.querySelector('#menu-list');

btnToggle.addEventListener('click',function(){
    menuList.classList.toggle("active");  
})

// to-do-list js

function toggleButton(ref,BtnId)
{
    document.getElementById(BtnId).disabled = false;
}

// windows onload

window.onload =()=> 
{
    const form1=document.querySelector("#addForm");
    let items=document.getElementById( "items" );
    let submit=document.getElementById("submit");
    form1.addEventListener("submit" .additem);
    form1.addEventListener("submit" .removeitem);
}

// create add item function

function additem(e)
{
    e.preventDefault();
    if(submit.value!="Submit")
    {
        console.log('Hello');
    }
}

// add new item
