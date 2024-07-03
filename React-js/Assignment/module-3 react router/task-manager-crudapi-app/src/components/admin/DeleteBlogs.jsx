import React,{useState,useEffect} from 'react'
import axios from 'axios';
import  {useParams,useNavigate}  from 'react-router-dom'
import Swal from 'sweetalert2';

export default function DeleteBlogs() {
const[data,setData]=useState([]);

const {id}=useParams();
const Navigate=useNavigate();

useEffect(()=>{
// delete contact data from manage contact
axios.delete(`http://localhost:4000/addblogs/${id}`).then((response)=>{
setData(response.data)

});

Swal.fire({
title: "Wow",
text: "Your Blogs  deleted successfully?",
icon: "success"
});

Navigate('/admin-login/manage-blogs');

},[data]);

return (
<div>

</div>
)
}
