import React,{useState,useEffect} from 'react'
import axios from 'axios'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
import { useNavigate } from 'react-router-dom'

export default function ManageBlogs() 
{
// destructuring of data
const[data,setData]=useState([]);
const Navigate=useNavigate();
// fetch a contact us data inside of admin manage contact
useEffect(()=>{
// manage all contacts data inside of admin
axios.get(`http://localhost:4000/addblogs`).then((response)=>{
setData(response.data)
});

},[data]); //dependency [] render one times 
       //no dependency refresh and load again and again
       //[props,state] render one times and run times update  


return (
<>

<AdminHeader />
<section id="dashboard-content" >
<div className="container-fluid m-0 p-0">
<div className="row">
<AdminSidebar />
<div className="admin-dashboard col-md-10 p-3">
<h2 className="ms-3 p-4 mt-3">Manage Blogs all data 
</h2>
<hr className="border border-1 border-dark w-50 ms-5" align="left" />
<div style={{width:"100%", height:"100px !important",overflow:"auto !important"}}>

<table className="table table-responsive">
<thead>
<tr>

<th scope="col">Titles</th>
<th scope="col">Blogs Image</th>
<th scope="col">Descriptions</th>
<th scope="col">Added Date</th>
<th scope="col">Action</th>
</tr>
</thead>
<tbody>

{data && data.map((row)=>{

return (

<>
<tr> 
<td>{row.title}</td>
<td><img src={row.blogimg} alt='blogs' className='img-fluid w-75' /></td>
<td><div style={{width:"90%",height:"100px",overflow:"auto"}}>{row.descriptions}</div></td>
<td>{row.added_date}</td>
<td colSpan={2}><div style={{minWidth:"100px"}}></div><button type='button' className='btn btn-danger text-white btn-sm' onClick={()=>Navigate(`/admin-login/delete-blogs/${row.id}`)}><i className='bi bi-trash'></i></button>

|

<button type='button' className='btn btn-primary text-white btn-sm' onClick={()=>Navigate(`/admin-login/edit-blogs/${row.id}`)}><i className='bi bi-pencil'></i></button>
</td>
</tr>

</>


)
})
}   

</tbody>
</table>
</div>

</div>
</div>
</div>
</section>

<AdminFooter />
</>
)
}
