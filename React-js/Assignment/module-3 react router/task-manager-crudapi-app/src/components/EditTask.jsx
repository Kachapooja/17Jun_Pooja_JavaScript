import React,{useEffect,useRef} from 'react'
import axios from 'axios'
import HeaderApp from './HeaderApp'
import FooterApp from './FooterApp'
import Swal from 'sweetalert2'
import { useNavigate,useParams,Link} from 'react-router-dom'
import { Row } from 'react-bootstrap'

export default function EditTask()
{
//  stored all data for fetch inside of edit category input
const newtaskname=useRef("");
const  priority=useRef("");
const  added_date=useRef("");
const  details=useRef("");

const {id}=useParams();
const Navigate=useNavigate();
// fetch api  for edit data inside of edit form
useEffect(()=>{
// axios.get()
axios.get(`http://localhost:4000/add-task/${id}`).then((response)=>{
   
newtaskname.current.value=response.data.newtaskname,
priority.current.value=response.data.priority,
added_date.current.value=response.data. added_date,
details.current.value=response.data.details
     
});

},[])

// update category 
const UpdateCategoryHandeler=()=>
{
      
  var updcat={
         
    newtaskname:newtaskname.current.value,
    priority:priority.current.value,
    added_date:added_date.current.value,
    details:details.current.value


  }  

// applied axios.put() for update api 
axios.put(`http://localhost:4000/add-task/${id}`,updcat).then(()=>{
   //pass message for update
   Swal.fire({
    title: "success",
    text: "Data successfully Updated",
    icon: "success"
  });
  Navigate("/");

});


}

return (
    <>
<HeaderApp />    
<section id="task-manager-content" className="container mt-5 p-5">
<Row>
<div className='col-md-4 shadow p-5'>
<h2>Manage Task</h2>
<ul className='sidebar'>
<li><Link to="/add-task">Add Tasks</Link></li>
<li><Link to="/manage-task">Manage Tasks</Link></li>
</ul>
</div>
<div className='col-md-7 ms-5'>   
<h1 className="fs-1 text-center">edit New Task</h1>
<form onSubmit={UpdateCategoryHandeler}>

<div className="input-group text-center w-75 mx-auto">
<label className="input-group-item">
<span className="bi bi-pencil fs-3" />
</label>
<input
type="text"
name="newtaskname" ref={newtaskname}
placeholder="New Task"
className="form-control border border-0  border-bottom"
/>
</div>
<div className="input-group text-center w-75 mx-auto mt-5">
<label className="input-group-item">
<span className="bi bi-pencil fs-3" />
</label>
<select name="priority" ref={priority} className="form-control border border-0  border-bottom">
<option value='higher'>higher</option>
<option value='low'>low</option>
</select>
</div>

<div className="input-group text-center w-75 mx-auto mt-5">
<label className="input-group-item">
<span className="bi bi-pencil fs-3" />
</label>
<input
type="date"
name="added_date" ref={added_date}
placeholder="Added date"
className="form-control border border-0  border-bottom"
/>
</div>

<div className="input-group text-center w-75 mx-auto mt-5">
<label className="input-group-item">
<span className="bi bi-pencil fs-3" />
</label>
<textarea
type="text"
name="details" ref={details}
placeholder="Details"
className="form-control border border-0  border-bottom"></textarea>
</div>
{/* <div className="input-group text-center w-75 mt-3 mx-auto">
<button
type="submit"
name="submit"
placeholder="New Task"
className="btn btn-md w-100 btn-task-app ms-4"
>
update Task <span className="bi bi-send-arrow-down" />
</button>
</div> */}
<div className='form-group mt-3 w-50 ms-5'>
<button type='button'  placeholder='Title' className='btn btn-dark text-white btn-lg' onClick={UpdateCategoryHandeler}>Update Blogs</button>
</div>
</form>
</div>
</Row>
</section>
<FooterApp />
</>
)
}
