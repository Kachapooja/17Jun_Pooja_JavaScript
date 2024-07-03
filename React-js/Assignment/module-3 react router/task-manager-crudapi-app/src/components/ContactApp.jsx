// hooks : hooks is a function i.e used to destructuring data | fetch data | take input from users | take reference of users data.
import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'; // libraries i.e used to get | post | delete | update any api 
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import HeaderApp from './HeaderApp'
import FooterApp from './FooterApp'
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

// http://localhost:4000/contacts

export default function ContactApp() {
  //destructured of data via useState
  const[data,setData]=useState([]);
  // insert a data inside of contact us using   http://localhost:4000/contacts
  // email js stored all parameters 
  const serviceID="service_chztbwt";
  const templateID="template_ixovm9k";
  const publicKey="XSpVxjI1q64unxs7G";

  const name=useRef("");
  const email=useRef("");
  const subject=useRef("");
  const phone=useRef("");
  const message=useRef("");

  // create a formHandeler events function 

  const formHandeler=(e)=>{
    e.preventDefault();
    var insert={
      name:name.current.value,
      email:email.current.value,
      subject:subject.current.value,
      phone:phone.current.value,
      message:message.current.value

    }
    // call an API(application programming interface) using axios
    emailjs.sendForm(serviceID, templateID, e.target, publicKey);
    axios.post(`http://localhost:4000/contacts`,insert).then(()=>{
    Swal.fire({
      title: "Wow",
      text: "Thanks for contact with us we will contact with you soon?",
      icon: "success"
    });

    });

    e.target.reset();
  }
   
  return (
    <>
<HeaderApp />    
<section id="task-manager-content" className="container mt-5 p-5">
<Row>
<div className='col-md-5 shadow p-5'>
<h2 className='ms-5'>Contact with us</h2>
<ul className='sidebar'>
<li><Link to="/">101, Aditya Complex, Jalaram 2 Street Number 2, above Sbi Bank, Near Indira Circle, Jala Ram Nagar, Rajkot, Gujarat 360005</Link></li>
<li><Link to="/">

<iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3691.6983450443645!2d70.77276967529222!3d22.289413879694436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d22.288793599999998!2d70.77560319999999!4m5!1s0x3959ca248c77c099%3A0xdf5ac10af64ac8ee!2saddress%20tops%20technology%20rajkot!3m2!1d22.2901061!2d70.7749552!5e0!3m2!1sen!2sin!4v1714723441952!5m2!1sen!2sin" width="100%" height="250" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Link>

</li>

</ul>
</div>
<div className='col-md-6 ms-5'>   
<h1 className="fs-1 text-center">Contact Form</h1>
<form method="post" onSubmit={formHandeler}>

<div className="input-group text-center w-100 mx-auto">
<label className="input-group-item">
<span className="bi bi-person fs-3" />
</label>
<input
type="text" ref={name}
name="name"
placeholder="Name"
className="form-control border border-0  border-bottom"
/>
</div>

<div className="input-group text-center w-100 mx-auto mt-5">
<label className="input-group-item">
<span className="bi bi-inbox fs-3" />
</label>
<input
type="text"
name="email" ref={email}
placeholder="Email"
className="form-control border border-0  border-bottom"
/>
</div>


<div className="input-group text-center w-100 mx-auto mt-5">
<label className="input-group-item">
<span className="bi bi-book fs-3" />
</label>
<input
type="text"
name="subject" ref={subject}
placeholder="Subject"
className="form-control border border-0  border-bottom"
/>
</div>


<div className="input-group text-center w-100 mx-auto mt-5">
<label className="input-group-item">
<span className="bi bi-phone fs-3" />
</label>
<input
type="text"
name="phone"
placeholder="Phone" ref={phone}
className="form-control border border-0  border-bottom"
/>
</div>



<div className="input-group text-center w-100 mx-auto mt-5">
<label className="input-group-item">
<span className="bi bi-chat-right fs-3" />
</label>
<textarea
type="text"
name="message"
placeholder="Message" ref={message}
className="form-control border border-0  border-bottom"></textarea>
</div>
<div className="input-group text-center w-100 mt-3 mx-auto">
<button
type="submit"
name="contact"
className="btn btn-md w-100 btn-task-app ms-4"
>
Send <span className="bi bi-send-arrow-down" />
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
