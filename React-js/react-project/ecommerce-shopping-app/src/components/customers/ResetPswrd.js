import React from 'react';
import {MDBContainer,MDBRow} from 'mdb-react-ui-kit';
import logo from '../../images/logo.png';
import resetpswrd from '../../images/reset-password.png';
import { Link } from 'react-router-dom';

export default function ResetPswrd() {
  return (
    <div>
    <MDBContainer fluid className='reset-password'>

{/* main header */}
<MDBRow className=''>
  <div className='col-md-3 text-center'>
    <img src={logo} alt='logo' className='mt-3 ms-5 float-start' />
  </div>
  <div className='col-md-3'>
    <form className='input-group mt-4 ms-4 w-50 h-50 shadow' style={{border : '0', backgroundColor:"#f6f6f6",borderRadius:"5px",color:"#d8d8d8"}}>
      <i className='bi bi-search mt-1 ms-4'></i>
      <input type="text" placeholder="Search" className='border border-0 bg-transparent ms-1'/>
    </form>
  </div>
  <div className='col-md-2'>
    <select className='' style={{border:"0",backgroundColor:"transparent",marginTop:"30px"}}>
      <option>English(United States)</option>
      <option>United Kingdom</option>
    </select>
  </div>
  <div className='col-md-4'>
      <button className='mt-3 shadow border border-1 border-dark bg-white rounded' style={{padding:"10px 35px",fontSize:"15px"}}>
      <Link to='/' style={{color:"#8a33fd"}}>Login</Link>
      </button>
  
      <button className='mt-3 ms-5 shadow border border-1 border-dark bg-white rounded' style={{padding:"10px 35px",fontSize:"15px"}}>
      <Link to='/signup-page' style={{color:"#8a33fd"}}>Sign Up</Link>
      </button>
  </div>
</MDBRow>
<hr />

{/* main section */}
<MDBRow className=''>
  <div className='col-md-6 '>
    <img src={resetpswrd} alt='' className='imgg h-100 w-100' />
  </div>
  <div className='col-md-5 mt-4' style={{marginLeft:"4%"}}>
    <b className='fs-3 text-dark'>Reset Your Password</b>
    <p style={{color:"#666666"}}>Enter your email and well send you a link to reset your password.</p>
    <p>Please check it.</p>
    
    <form className=''>
      <label className='text-dark'>Email</label>
      <br/>
      <input type='text' placeholder='focus001@gmail.com' className='pass mt-2 input-group  rounded'/>
      <span className='text-danger'>We can not find your email.</span>
      <br/><br/>

      <button className='mt-2 shadow border border-0 rounded' style={{backgroundColor:"#8a33fd",padding:"10px 35px",fontSize:"15px"}}>
      <Link to='/check-email' className='text-white'>Send</Link>
      </button>

      <div className='form-group mt-3'>
        <h7>Back to<Link to='/' className='text-decoration-underline text-dark'>Login </Link></h7>
      </div>
    </form>

  </div>
</MDBRow>
</MDBContainer>
    </div>
  )
}
