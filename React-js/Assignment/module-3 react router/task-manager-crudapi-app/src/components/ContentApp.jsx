import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import FooterApp from './FooterApp'

export default function ContentApp() {
//display all task destructring of data
const[data,setData]=useState([]);
const Navigate=useNavigate();

// display data 
useEffect(()=>{
// api call for display all data
axios.get(`http://localhost:4000/add-task`).then((response)=>{
    setData(response.data);
})

},[]); 
return (
<>

<section id="task-manager-content" className="container-fluid mt-5 p-5">
<Row>
<div className='col-md-3 shadow p-4 vh-100'>
<h2>Manage Task</h2>
<ul className='sidebar'>
<li><Link to="/add-task">Add Tasks</Link></li>
<li><Link to="/manage-task">Manage Tasks</Link></li>

</ul>
</div>
<div className='col-md-7 ms-5'>    
{/* display task */}
<h1 className="fs-1 text-center mt-0">Display Task</h1>
<table  className="mt-5 table" style={{minWidth:"100%"}}>
<tbody>
<tr className='bg-dark text-white'>
<th>TaskName</th>
<th>Priority</th>
<th>Added Date</th>
<th>Details</th>
<th>Action</th>
</tr>
{data && data.map((item)=>{
  return (  
<>
<tr>
<td>{item.id}</td>

<td>{item.newtaskname}</td>
<td>{item.priority}</td>
<td>{item.added_date}</td>
<td>{item.details}</td>
{/* <td><div style={{minWidth:"130px"}}><a href="" className="btn btn-danger text-white rounded-circle w-0">
<span className="bi bi-trash" onClick={()=>Navigate(`/delete-task/${item.id}`)} />
</a> | <a href="" className="btn btn-primary text-white rounded-circle w-0">
<span className="bi bi-pencil" />
</a></div> */}
<td colSpan={2}><div style={{minWidth:"100px"}}></div><button type='button' className='btn btn-danger text-white btn-sm' onClick={()=>Navigate(`/delete-task/${item.id}`)}><i className='bi bi-trash'></i></button>

|

<button type='button' className='btn btn-primary text-white btn-sm' onClick={()=>Navigate(`/edit-task/${item.id}`)}><i className='bi bi-pencil'></i></button>
</td>


</tr>
</>

)
})
}  

</tbody>
</table>
</div>
</Row>

</section>
<FooterApp/>
</>
)
}
