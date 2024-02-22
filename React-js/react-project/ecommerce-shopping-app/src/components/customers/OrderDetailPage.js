import React from 'react';
import { MDBContainer,MDBRow } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'; 
import rectangle from "../../images/Rectangle 21.png";
import googleplay from '../../images/googleplay-logo.png';
import orderdetail from '../../images/orderdetail.png';
import orderdetail1 from '../../images/orderdetail-1.png';
import myorderimg2 from '../../images/myorder-img2.png';
import myorderimg3 from '../../images/myorder-img3.png';


export default function OrderDetailPage() {
  return (
<div>
<MDBContainer fluid className='order-detail'>

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

        {/* Personal info content */}
        <section>
        {/* personal info frame */}
        <div className='d-flex fs-5 fw-semibold ms-5 mt-4' style={{color:"#807d7e"}}>
        <span style={{color:"#807d7e"}}>Home</span>&nbsp;
        <i className='bi bi-chevron-right'></i>&nbsp;
        <span>My Account</span>&nbsp;
        <i className='bi bi-chevron-right'></i>&nbsp;
        <br></br><br></br>
        <span style={{color:"#3c4242"}}>Order Detail</span>
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
            <div className='mt-3' style={{marginLeft:"25%",color:"#807d7e",fontSize:"15px",backgroundColor:"#f6f6f6"}}>
                <i className='bi bi-bag'></i>
                <Link to='/my-order' style={{color:"#807d7e"}}><span className='ms-2'>My orders</span></Link>
            </div>
            <div className='mt-3' style={{marginLeft:"25%",color:"#807d7e",fontSize:"15px"}}>
                <i className='bi bi-heart'></i>
                <Link to='/wishlist-page' style={{color:"#807d7e"}}><span className='ms-2'>Wishlist</span></Link>
            </div>
            <div className='mt-3' style={{marginLeft:"25%",color:"#807d7e",fontSize:"15px"}}>
                <i className='bi bi-person'></i>
                <Link to='/contact-detail-page' style={{color:"#807d7e"}}><span className='ms-2'>My Info</span></Link>
            </div>
            <div className='mt-3' style={{marginLeft:"25%",color:"#807d7e",fontSize:"15px"}}>
                <i className='bi bi-box-arrow-right'></i>
                <Link to='/' style={{color:"#807d7e"}}><span className='ms-2'>Sign out</span></Link>
            </div>
        </div>
        <div className='col-md-8 ms-5'>
            <i className='bi bi-chevron-left'></i>
            <span className='fw-bold fs-3 ms-2' style={{color:"#3c4242"}}>Order Details</span>
            

            {/* order detail */}
            <div className='mt-4 h-auto px-5 py-3' style={{backgroundColor:"#f6f6f6"}}>
                <b className='fs-5'>Order no:#123456789</b><br/>
                <div className='d-flex mt-1' style={{fontSize:"15px"}}>
                    <span className='fw-bold' style={{color:"#807d7e"}}>Placed On <span style={{color:"#bebcbd"}}>2 June 2023 2:40 PM</span></span>
                    <span className='fw-bold' style={{color:"#807d7e",marginLeft:"52%"}}>Total Status:<span style={{color:"#3c4242"}}>$143.00</span></span>
                </div>
            </div>

            <img  src={orderdetail} alt='' className='mt-5' style={{marginLeft:"16%"}}/>

            <img  src={orderdetail1} alt='' className='mt-5' style={{marginLeft:"8%"}}/>

            <div className='px-3 mt-5' style={{backgroundColor:"#f6f6f6"}}>

                {/* order-1 */}
                <div className='d-flex mt-2 py-3'>
                <img src={myorderimg2} alt=''/>
                <div className='ms-4' style={{color:"#3c4242",fontSize:"15px"}}>
                    <b>Printed Blue & White Cote</b><br></br>
                    <b>Color: <span style={{color:"#807d7e"}}>White</span></b><br></br>
                </div>
                    <b className='' style={{marginLeft:"20%"}}>Qty:<span style={{color:"#807d7e"}}>1</span></b><br/>
                    <span className='fw-bold' style={{color:"#807d7e",marginLeft:"20%"}}>$29.00</span>
                    <Link to='/error-page' style={{marginLeft:"10%"}}><i className='bi bi-x-lg' ></i></Link>
                </div>

                {/* order-2 */}
                <div className='d-flex mt-1 py-3'>
                    <img src={myorderimg3} alt=''/>
                    <div className='ms-4' style={{color:"#3c4242",fontSize:"15px"}}>
                        <b>Blue Shirt</b><br></br>
                        <b>Color: <span style={{color:"#807d7e"}}>Blue</span></b><br></br>
                    </div>
                        <b style={{marginLeft:"33%"}}>Qty:<span style={{color:"#807d7e"}}>1</span></b><br/>
                        <span className='fw-bold' style={{color:"#807d7e",marginLeft:"20%"}}>$29.00</span>
                        <Link to='/error-page' style={{marginLeft:"10%"}}><i className='bi bi-x-lg' ></i></Link>
                </div>
            </div>

        </div>
        </MDBRow>
    </section>


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
