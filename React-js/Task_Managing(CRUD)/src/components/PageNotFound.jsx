import React from 'react'
import {Link} from 'react-router-dom'
import error from '../assets/images/404error.gif'
import HeaderApp from './HeaderApp'
import FooterApp from './FooterApp'

export default function PageNotFound() {
  return (
    <>

<HeaderApp />    
<section id="task-manager-content" className="container-fluid p-5 ">
    <h1 className="fs-1 text-center">Page is not found 404 Error</h1>
    <img src={error} alt='404' className='img-fluid w-25 mx-auto d-block' /><br/>
    <div className="text-center">
    <Link to='/'><button type='button' className='btn btn-md btn-task text-dark fw-bold mt-3'>Go to Home</button></Link>
    </div>
</section>
<FooterApp />


    </>
  )
}
