import React from 'react';
import { MDBContainer,MDBRow } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import signupimg from '../../images/signup-img.png';
import google from '../../images/google_logo.png';
import twitter from '../../images/twitter_logo.png';

export default function SignUpPage() {
  return (
<div>

<MDBContainer fluid className='signup-page'>

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
            <button className='mt-3  ms-5  shadow border border-0 rounded' style={{backgroundColor:"#8a33fd",padding:"10px 35px",fontSize:"15px"}}>
              <Link to='/' className='text-white'>Sign Up</Link>
            </button>
          
          </div>
        </MDBRow>
        <hr />

        {/* main section */}
        <MDBRow className=''>
          <div className='col-md-6 '>
            <img src={signupimg} alt='' className='imgg h-100 w-100' />
          </div>
          <div className='col-md-5 mt-4' style={{marginLeft:"4%"}}>
            <b className='fs-3 text-dark'>Sign Up</b>
            <p style={{color:"#666666"}}>Sign up for free to access to in any of uor products</p>
            <br /><br />

            <button className='p-2 w-100 bg-white border border-1 border-dark rounded shadow ' style={{color:"#8a33fd",fontSize: "18px !important",marginTop:"-10px"}}><img src={google} alt='google' style={{height:"22px",width:"22px"}}/>Continue With Google</button>

            <button className='p-2 mt-4 w-100 bg-white border border-1 border-dark rounded' style={{color:"#8a33fd",fontSize: "18px !important"}}><img src={twitter} alt='twitter' style={{height:"22px",width:"22px"}}/>Continue With Twitter</button>

            <form className='mt-5'>
              <label>Email adress</label>
              <br/>
              <input type='text' placeholder='designer@gmail.com' className='mt-2 input-group border border-1 rounded' />
              <span className='text-danger'>Error Message</span>
              <br/><br/>

              <label>Password</label>
              <i className='bi bi-eye-slash float-end '>&nbsp;
              <span>Hide</span></i><br/>
              <input type='text' className='mt-2 input-group border border-1  rounded' />
              <p>Use 8 or more characters with a mix of letters,numbers & symbols</p><br/>

              <input type="checkbox" className=''/>Agree to our <span className='text-decoration-underline'> Terms of use</span> and <span className='text-decoration-underline'> Privacy Policy</span>
              <br/>

              <input type='checkbox' className='' />Subscribe to our monthly newsletter
              <br/>

              <button className='mt-5 shadow border border-0 rounded' style={{backgroundColor:"#8a33fd",padding:"10px 35px",fontSize:"15px"}}>
              <Link to='/' className='text-white'>Sign Up</Link>
              </button>

              <div className='form-group mt-3'>
                <h7>Don't have an account ?<Link to='/' className='text-decoration-underline text-dark'>Login </Link></h7>
              </div>
            </form>

          </div>
        </MDBRow>
</MDBContainer>

</div>
  )
}
