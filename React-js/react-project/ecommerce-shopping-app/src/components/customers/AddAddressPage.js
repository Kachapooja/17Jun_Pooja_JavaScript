import React from 'react';
import { MDBContainer ,MDBRow } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png'; 
import rectangle from "../../images/Rectangle 21.png";
import googleplay from '../../images/googleplay-logo.png';


export default function AddAddressPage() {
  return (
<div>
<MDBContainer fluid className='add-address'>

    {/*  main header section   */}
    <MDBRow className=''>

        <div className='col-md-2 text-center'>
            <img src={logo} alt='logo' className='mt-3 ms-5 float-start' />
        </div>

        <div className='col-md-5'>
            <nav className="mt-3 fs-5" id="coll">
                <ul className="navbar-link">
                    <li><Link to="/home-page" className="nav-item page-scroll">Shop</Link></li>
                    <li><Link to="/" className="nav-item page-scroll">Men</Link></li>
                    <li><Link to="/list-page" className="nav-item active">Women</Link></li>
                    <li><Link to="/" className="nav-item page-scroll">Combos</Link></li>
                    <li><Link to="/" className="nav-item page-scroll">Joggers</Link></li>
                </ul>
            </nav>
        </div>

        <div className='col-md-3'>
            <form className='input-group mt-3 ms-4 w-75 h-75' style={{ border: '0', backgroundColor: "#f6f6f6", borderRadius: "5px", color: "#d8d8d8" }}>
                <i className='bi bi-search mt-2 ms-4'></i>
                <input type="text" placeholder="Search" className='border border-0 bg-transparent ms-1' />
            </form>
        </div>

        {/* icons */}
        <div className='col-md-2 mt-4' id='icons'>
            <Link to='/wishlist-page'>
            <button className='border border-0'>
                <i className='bi bi-heart'></i>
            </button>
            </Link>
            <Link to='/contact-detail-page'>
                <button className='border border-0 ms-2 text-white'
                style={{backgroundColor:"#8a33fd"}}>
                    <i className='bi bi-person'></i>
                </button>
            </Link>
            <Link to='/cart-page'>
            <button className='border border-0 ms-2' >
                <i className='bi bi-cart'></i>
            </button>
            </Link>
        </div>
    </MDBRow>
    <hr />

    {/* personal info frame */}
    <div className='d-flex fs-5 fw-semibold ms-5 mt-4' style={{color:"#807d7e"}}>
        <span style={{color:"#807d7e"}}>Home</span>&nbsp;
        <i className='bi bi-chevron-right'></i>&nbsp;
        <span>My Account</span>&nbsp;
        <i className='bi bi-chevron-right'></i>&nbsp;
        <br></br><br></br>
        <span style={{color:"#3c4242"}}>Delivery Address</span>
    </div>

    {/* personal info section */}
    <MDBRow>
    <div className='col-md-3'>
        <div className='mt-1 ms-5'>
            <img src={rectangle} alt='' style={{ marginTop: "-11px" }} />
            <span className='fs-2 ms-3' style={{ fontWeight: "600", color: "#3c4242" }}>Hello Jhanvi</span>
            <br></br>
            <b className='fw-light ms-2' style={{color:"#807d7e"}}>Welcome to your Account</b>
        </div>
        <div className='mt-3' style={{marginLeft:"25%",color:"#807d7e",fontSize:"15px"}}>
            <i className='bi bi-bag'></i>
            <Link to='/my-order' style={{color:"#807d7e"}}><span className='ms-2'>My orders</span></Link>
        </div>
        <div className='mt-3' style={{marginLeft:"25%",color:"#807d7e",fontSize:"15px"}}>
            <i className='bi bi-heart'></i>
            <Link to='/wishlist-page' style={{color:"#807d7e"}}><span className='ms-2'>Whishlist</span></Link>
        </div>
        <div className='mt-3' style={{marginLeft:"25%",color:"#807d7e",fontSize:"15px",backgroundColor:"#f6f6f6"}}>
            <i className='bi bi-person'></i>
            <Link to='/contact-detail-page' style={{color:"#807d7e"}}><span className='ms-2'>My Info</span></Link>
        </div>
        <div className='mt-3' style={{marginLeft:"25%",color:"#807d7e",fontSize:"15px"}}>
            <i className='bi bi-box-arrow-right'></i>
            <Link to='/' style={{color:"#807d7e"}}><span className='ms-2'>Sign out</span></Link>
        </div>
    </div>
    <div className='col-md-7 ms-5'>
        <span className='fw-bold fs-2' style={{color:"#3c4242"}}>My Info</span><br></br>
        <span className='fw-bold fs-6' style={{color:"#3c4242"}}>Add Address</span>

        <form className='input-group mt-3'>
            <div className=''>
                <label style={{color:"#3c4242"}}>First Name*</label>
                <input type='text' placeholder='First Name' className='form-control border border-0 py-2'style={{backgroundColor:"#f6f6f6",width:"350px",fontSize:"15px"}}/>
            </div>
            <div className='ms-5'>
                <label style={{color:"#3c4242"}}>Last Name*</label>
                <input type='text' placeholder='Last Name' className='form-control border border-0 py-2'style={{backgroundColor:"#f6f6f6",width:"350px",fontSize:"15px"}}/>
            </div>
        </form>
        <br/><br/>

        <form className='input-group mt-3'>
            <div className=''>
                <label style={{color:"#3c4242"}}>Country / Region*</label>
                <input type='text' placeholder='Country / Region' className='form-control border border-0 py-2'style={{backgroundColor:"#f6f6f6",width:"350px",fontSize:"15px"}}/>
            </div>
            <div className='ms-5'>
                <label style={{color:"#3c4242"}}>Company Name*</label>
                <input type='text' placeholder='Company (optional)' className='form-control border border-0 py-2'style={{backgroundColor:"#f6f6f6",width:"350px",fontSize:"15px"}}/>
            </div>
        </form>
        <br/><br/>

        <form className='input-group mt-3'>
            <div className=''>
                <label style={{color:"#3c4242"}}>Street Address*</label>
                <input type='text' placeholder='House number and street name' className='form-control border border-0 py-2'style={{backgroundColor:"#f6f6f6",width:"350px",fontSize:"15px"}}/>
            </div>
            <div className='ms-5'>
                <label style={{color:"#3c4242"}}>Apt,suite,unite</label>
                <input type='text' placeholder='apartment,suite,unite,etc.(optional)' className='form-control border border-0 py-2'style={{backgroundColor:"#f6f6f6",width:"350px",fontSize:"15px"}}/>
            </div>
        </form>
        <br/><br/>

        <form className='input-group mt-3'>
            <div className=''>
                <label style={{color:"#3c4242"}}>City*</label>
                <input type='text' placeholder='Town/City' className='form-control border border-0 py-2'style={{backgroundColor:"#f6f6f6",width:"350px",fontSize:"15px"}}/>
            </div>
            <div className='ms-5'>
                <label style={{color:"#3c4242"}}>State*</label>
                <select className='border border-0 py-2 'style={{backgroundColor:"#f6f6f6",width:"350px",fontSize:"15px",color:"#807d7e"}}>State
                <option>State</option>
                </select>
            </div>
        </form>
        <br/><br/>

        <form className='input-group mt-3'>
            <div className=''>
                <label style={{color:"#3c4242"}}>Phone*</label>
                <input type='text' placeholder='Phone' className='form-control border border-0 py-2'style={{backgroundColor:"#f6f6f6",width:"350px",fontSize:"15px"}}/>
            </div>
            <div className='ms-5'>
                <label style={{color:"#3c4242"}}>Postal Code*</label>
                <input type='text' placeholder='Postal Code' className='form-control border border-0 py-2'style={{backgroundColor:"#f6f6f6",width:"350px",fontSize:"15px"}}/>
            </div>
        </form>
        <br/><br/>

        <div className='mt-3'>
            <label style={{color:"#3c4242"}}>Delivery Instruction</label>
            <textarea type='text' placeholder='Delivery Instruction' className='w-100 border border-0 py-2' rows="4" style={{backgroundColor:"#f6f6f6",fontSize:"15px"}}/>
        </div>

        <div className="mt-4">
            <input type="checkbox" className=""/>
            <label className="">Set as default shipping address</label>
        </div>
        <div className="">
            <input type="checkbox" className=""/>
            <label className="">Set as default billing address</label>
        </div>

        <div className='mt-4'>
            <Link to='/confirmed-order'><button type='submit' className='border border-0 rounded-2 text-white px-4 py-1' style={{backgroundColor:"#8a33fd"}}>Save</button></Link>
            <Link to='/'>
            <button type='submit' className='border border-0 rounded-2 ms-4 px-4 py-1' style={{color:"#807d7e",backgroundColor:"#f6f6f6"}}>Cancel</button></Link>
        </div>
    </div>
    </MDBRow>

    {/* footer section */}
    <footer className="footer">
        <MDBRow className='footer-body ms-5 mt-5'>
        <div className='col-md-2 footer-text mt-5 ms-5'>
            <h3 className='text-white'>Need Help</h3>
            <br></br>
            <Link to="/" className='text-white footer-text' >Contact Us</Link><br></br>
            <Link to="/" className='text-white' >Track Order</Link><br></br>
            <Link to="/" className='text-white' >Returns & Refunds</Link><br></br>
            <Link to="/" className='text-white' >FAQs</Link><br></br>
            <Link to="/" className='text-white' >Career</Link><br></br>
        </div>
        <div className='col-md-2 footer-text mt-5 ms-4'>
            <h3 className='text-white'>Company</h3>
            <br></br>
            <Link to="/" className='text-white' >About Us</Link><br></br>
            <Link to="/" className='text-white' >euphoria Blog</Link><br></br>
            <Link to="/" className='text-white' >euphoriastan</Link><br></br>
            <Link to="/" className='text-white' >Collaboration</Link><br></br>
            <Link to="/" className='text-white' >Media</Link><br></br>
        </div>
        <div className='col-md-2 footer-text mt-5 ms-4'>
            <h3 className='text-white'>More Info</h3>
            <br></br>
            <Link to="/" className='text-white' >Terms and Conditions</Link><br></br>
            <Link to="/" className='text-white' >Privacy Policy</Link><br></br>
            <Link to="/" className='text-white' >Shipping Policy</Link><br></br>
            <Link to="/" className='text-white' >Sitemap</Link><br></br>
        </div>
        <div className='col-md-4 footer-text mt-5 ms-4'>
            <h3 className='text-white'>Location</h3>
            <br></br>
            <Link to="/" className='text-white' >support@euphoria.in</Link><br></br>
            <Link to="/" className='text-white' >Eklingpura Chouraha,Ahemdabad Main Road</Link><br></br>
            <Link to="/" className='text-white' >(NH 8- Near Mahadev Hotel)Udaipur,India-313002</Link><br></br>
        </div> 
        </MDBRow> 

        <h3 style={{marginLeft:"62%"}}><Link to="/" className='text-white'>Download The App</Link></h3>

        <div id='icons1'>
            <Link to="/"><i className='bi bi-facebook icn'></i></Link>
            <Link to="/"><i className='bi bi-instagram icn'></i></Link>
            <Link to="/"><i className='bi bi-twitter icn'></i></Link>
            <Link to="/"><i className='bi bi-linkedin icn'></i></Link>
        </div> 

        <MDBRow className='w-25 icons2'> 
            <div className='col-md-2'>
                <Link to="/"><img src={googleplay} alt=''/></Link>
            </div>
            <div className='col-md-6 tt1'>
                <span className='text-white  '>android app on</span>
                <h5 className='text-white '>Google Play</h5>
            </div>
        </MDBRow>

        <MDBRow className='w-25 icons3'> 
            <div className='col-md-2 icn1'>
                <Link to="/"><i className=' bi bi-phone text-white fs-1  '/></Link>
            </div>
            <div className='col-md-6 tt1'>
                <span className='text-white  '>Available on the</span>
                <h5 className='text-white '>App Store</h5>
            </div>
        </MDBRow> 

        <hr className='container mt-4 ' style={{color:"lightgrey"}}/>
        <span className='text-white fs-3' style={{marginLeft:"8%"}}>Popular Categories<i className='bi bi-chevron-down float-end' style={{marginRight:"10%"}}></i></span> 
        <hr className='container' style={{color:"lightgrey"}}/>   

        <span className='mt-3 text-white ' style={{marginLeft:"30%"}}>Copyright &copy; 2023 Euphoria Folks Pvt Ltd. All rights reserved.</span>
    </footer>
    <hr></hr>


</MDBContainer>
</div>
  )
}
