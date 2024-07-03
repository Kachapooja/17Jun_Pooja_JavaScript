import React,{useState,useEffect} from 'react'
import axios from 'axios'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
import { useNavigate } from 'react-router-dom'

export default function ManageContacts() 
{
// destructuring of data
const[data,setData]=useState([]);
const Navigate=useNavigate();

// fetch a contact us data inside of admin manage contact
useEffect(()=>{
// manage all contacts data inside of admin
axios.get(`http://localhost:4000/contacts`).then((response)=>{
setData(response.data)
});

},[]);


return (
<>

<AdminHeader />
<section id="dashboard-content" >
<div className="container-fluid m-0 p-0">
<div className="row">
<AdminSidebar />
<div className="admin-dashboard col-md-10 p-3">
<h2 className="ms-3 p-4 mt-3">Manage Contacts all data 
</h2>
<hr className="border border-1 border-dark w-50 ms-5" align="left" />

<table className="table w-100" id='example'>
<thead>
<tr>

<th scope="col">Name</th>
<th scope="col">Email</th>
<th scope="col">Subject</th>
<th scope="col">Phone</th>
<th scope="col">Message</th>
<th scope="col">Action</th>
</tr>
</thead>
<tbody>

{data && data.map((row)=>{

return (

<>
<tr> 
<td>{row.id}</td>
<td>{row.name}</td>
<td>{row.email}</td>
<td>{row.subject}</td>
<td>{row.phone}</td>
<td>{row.message}</td>
<td><button type='button' className='btn btn-danger text-white btn-sm' onClick={()=>Navigate(`/admin-login/manage-contact/${row.id}`)}><i className='bi bi-trash'></i></button></td>
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
</section>

<AdminFooter />
</>
)
}
