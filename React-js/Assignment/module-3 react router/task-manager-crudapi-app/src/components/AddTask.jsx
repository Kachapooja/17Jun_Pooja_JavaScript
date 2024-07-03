import React,{useRef} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import HeaderApp from './HeaderApp'
import FooterApp from './FooterApp'
import Swal from 'sweetalert2'
export default function AddTask() 
{
  // add task
  const newtaskname=useRef();
  const priority=useRef();
  const added_date=useRef();
  const details=useRef();
  const Navigate=useNavigate();

  // add a FormHandeler
  const AddFormHandeler=(e)=>{
    e.preventDefault();
    var insert={
      newtaskname:newtaskname.current.value,
      priority:priority.current.value,
      added_date:added_date.current.value,
      details:details.current.value
    }

    // call api via axios
    axios.post(`http://localhost:4000/add-task`,insert).then(()=>{
      // messages
      Swal.fire({
        title: "Wow",
        text: "Your task successfully addedd",
        icon: "success"
      });
      Navigate('/');
    });

    e.target.reset();

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
<h1 className="fs-1 text-center">Add New Task</h1>
<form onSubmit={AddFormHandeler}>

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
<div className="input-group text-center w-75 mt-3 mx-auto">
<button
type="submit"
name="submit"
placeholder="New Task"
className="btn btn-md w-100 btn-task-app ms-4"
>
Create Task <span className="bi bi-send-arrow-down" />
</button>
</div>
</form>
</div>
</Row>
</section>
<FooterApp />
</>
  )
}
