import React from 'react'
import { Link } from 'react-router-dom'
import error from '../assets/images/404.gif'
import HeaderApp from './HeaderApp'
import FooterApp from './FooterApp'
export default function PageNotFound() {
return (
<>
<HeaderApp />    
<section id="task-manager-content" className="container mt-5 p-5">
<h1 className="fs-1 text-center">Page in not found 404 error</h1>
<img src={error} alt='404' className='img-fluid w-50 ms-5' />
<Link to='/'><button type='button' className='btn btn-dark text-white btn-md bg-dark'>Go to Home</button></Link>
</section>
<FooterApp />
</>

)
}
