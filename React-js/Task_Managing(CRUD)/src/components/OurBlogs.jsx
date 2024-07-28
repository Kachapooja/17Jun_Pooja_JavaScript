import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Card,CardBody,CardHeader} from 'react-bootstrap'
import HeaderApp from './HeaderApp'
import { useNavigate } from 'react-router-dom'

export default function OurBlogs() {

    // destructuring of data

    const[data,setData]=useState([]);
    const Navigate=useNavigate();

    // fetch a contact us data inside of admin manage conact

    useEffect(()=>{
        // manage all contact data inside of admin
    axios.get(``).then((response)=>{
        setData(response.data)
    });

    },[data]);  //dependency [] render one times

    // no dependency refresh and load again and again

    // [props,state] render one times and run times update
  return (
    <>

<HeaderApp />
<section id="task-manager-content" className="container-fluid mt-5 p-5">
<h1 className="fs-1 text-center mt-0">Our Blogs</h1>
<Row>
<div className='col-md-3 shadow p-5 vh-100'>
<h2>Manage Blogs</h2>
<ul className='sidebar'>
<li><Link to="/add-task">Manage Blogs Tasks</Link></li>

</ul>
</div>
<div className='col-md-8 ms-5'>    
{/* display task */}
<Card className='w-100'>
<CardHeader className='bg-dark'><h4 className='p-3 text-white'>Display All Blogs here</h4></CardHeader>
{/* display all blogs */}

<CardBody>        
{data && data.map((row)=>{
return (

<>
<Link to=""><h3>{row.title}</h3></Link>
<img src={row.blogimg} style={{width:"100%",height:"200px"}}/>

</>

)

})
}   


</CardBody>

</Card>

</div>
</Row>

</section>

    </>
  )
}
