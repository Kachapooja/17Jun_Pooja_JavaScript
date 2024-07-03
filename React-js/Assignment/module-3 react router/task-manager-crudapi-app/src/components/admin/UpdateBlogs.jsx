import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {Form} from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
import Swal from 'sweetalert2'
import { useParams,useNavigate } from 'react-router-dom'
export default function UpdateBlogs() 
{
const[data,setData]=useState([]);
const{id}=useParams();
const Navigate=useNavigate();   
const title=useRef("");
const blogimg=useRef("");
const descriptions=useRef("");
const added_date=useRef("");
//edit  blogs using http://localhost:4000/addblogs
useEffect(()=>{
axios.get(`http://localhost:4000/addblogs/${id}`).then((response)=>{

title.current.value=response.data.title;
blogimg.current.value=response.data.blogimg;
descriptions.current.value=response.data.descriptions;
added_date.current.value=response.data.added_date;

});  


},[]);


// form Handeler
const UpdateBlogHandeler=()=>
{
var updblogs={
title:title.current.value,
blogimg:blogimg.current.value,
descriptions:descriptions.current.value,
added_date:added_date.current.value
}
// call api via axios
axios.put(`http://localhost:4000/addblogs/${id}`,updblogs).then(()=>{
//pass a messages via Swal libraries
Swal.fire({
title: "Wow",
text: "Your Blogs Updated successfully",
icon: "success"
});

Navigate('/admin-login/manage-blogs');

});

}




return (
<>

<AdminHeader />
<section id="dashboard-content" >
<div className="container-fluid m-0 p-0">
<div className="row">
<AdminSidebar />
<div className="admin-dashboard col-md-10 p-3">
<h2 className="ms-3 p-4 mt-3">Edit Blogs
</h2>
<hr className="border border-1 border-dark w-50 ms-5" align="left" />
<Form>
<div className='form-group mt-3 w-50 ms-5'>
<label className='text-success'>Edit blogs Title *</label>
<input type='text' ref={title} placeholder='Title' className='form-control' />
</div>

<div className='form-group mt-3 w-50 ms-5'>

<label className='text-success'>Edit blogs Image *</label>

<input type='text' ref={blogimg} placeholder='Blogs images' className='form-control' />
</div>

<div className='form-group mt-3 w-50 ms-5'>

<label className='text-success'>Edit blogs descriptions *</label>
<textarea ref={descriptions} className='form-control' placeholder='descriptions'></textarea>
</div>


<div className='form-group mt-3 w-50 ms-5'>

<label className='text-success'>Edit added_date  *</label>
<input type='date' ref={added_date} className='form-control' placeholder='Added Date' />
</div>


<div className='form-group mt-3 w-50 ms-5'>
<button type='button'  placeholder='Title' className='btn btn-dark text-white btn-lg' onClick={UpdateBlogHandeler}>Update Blogs</button>
</div>
</Form>

</div>

</div>
</div>
</section>

<AdminFooter />
</>
)
}
