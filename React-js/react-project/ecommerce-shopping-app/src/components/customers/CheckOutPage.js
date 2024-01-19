import React from 'react';
import { MDBContainer,MDBRow } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png'; 
import rectangle from "../../images/Rectangle 21.png";
import payment1 from '../../images/payment1.png';
import payment2 from '../../images/payment2.png';
import payment3 from '../../images/payment3.png';
import payment4 from '../../images/payment4.png';
import cart1 from '../../images/cart1.png';
import cart2 from '../../images/cart2.png';
import cart3 from '../../images/cart3.png';
import googleplay from '../../images/googleplay-logo.png';


export default function CheckOutPage() {
  return (
    
<div>
<MDBContainer fluid className='check-out-page'>

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
            <button className='border border-0'>
                <i className='bi bi-heart'></i>
            </button>
            <button className='border border-0 ms-2'>
                <i className='bi bi-person'></i>
            </button>
            <button className='border border-0 text-white ms-2' style={{backgroundColor:"#8a33fd"}}>
                <i className='bi bi-cart'></i>
            </button>
        </div>
    </MDBRow>
    <hr />

    {/* checkout contain */}
    <section>
    {/* check out frame */}
    <div className='d-flex fs-5 fw-semibold ms-5 mt-4' style={{color:"#807d7e"}}>
        <span style={{color:"#807d7e"}}>Home</span>&nbsp;
        <i className='bi bi-chevron-right'></i>&nbsp;
        <span>My Account</span>&nbsp;
        <i className='bi bi-chevron-right'></i>&nbsp;
        <br></br><br></br>
        <span style={{color:"#3c4242"}}>Check Out</span>
    </div>

    {/* checkout section */}
    <div className='mt-1 ms-5'>
        <img src={rectangle} alt='' style={{ marginTop: "-11px" }} />
        <span className='fs-2 ms-3' style={{ fontWeight: "600", color: "#3c4242" }}>Check Out</span>
        <br></br>
        <b className='fs-6 ms-2' style={{color:"#3c4242"}}>Billing Details</b>
    </div>

    {/* billing detail */}
    <MDBRow className='mt-4 ms-5'>
        <div className='col-md-7'>
            <form className='input-group'>
                <div className="" >
                    <label style={{color:"#3c4242"}}>First Name*</label>
                    <input type="text" className="form-control border border-0 py-2" placeholder="First Name" style={{backgroundColor:"#f6f6f6",width:"350px",fontSize:"15px"}}/>
                </div>
                <div className='ms-5'>
                    <label style={{color:"#3c4242"}}>Last Name*</label>
                    <input type="text" className="form-control border border-0 py-2" placeholder="Last Name" style={{backgroundColor:"#f6f6f6",width:"350px",fontSize:"15px"}}/>
                </div>
            </form>
            <br></br><br></br>

            <form className='input-group'>
                <div className="" >
                    <label style={{color:"#3c4242"}}>Country / Region*</label>
                    <input type="text" className="form-control border border-0 py-2" placeholder="Country / Region" style={{backgroundColor:"#f6f6f6",width:"350px",fontSize:"15px"}}/>
                </div>
                <div className='ms-5'>
                    <label style={{color:"#3c4242"}}>Company Name*</label>
                    <input type="text" className="form-control border border-0 py-2" placeholder="Company (optional)" style={{backgroundColor:"#f6f6f6",width:"350px",fontSize:"15px"}}/>
                </div>
            </form>
            <br></br><br></br>

            <form className='input-group'>
                <div className="" >
                    <label style={{color:"#3c4242"}}>Street Address*</label>
                    <input type="text" className="form-control border border-0 py-2" placeholder="House number and street name" style={{backgroundColor:"#f6f6f6",width:"350px",fontSize:"15px"}}/>
                </div>
                <div className='ms-5'>
                    <label style={{color:"#3c4242"}}>Apt,suite,unit</label>
                    <input type="text" className="form-control border border-0 py-2" placeholder="apartment,suite,unnit,etc.(optional)" style={{backgroundColor:"#f6f6f6",width:"350px",fontSize:"15px"}}/>
                </div>
            </form>
            <br></br><br></br>

            <form className='input-group'>
                <div className="" >
                    <label style={{color:"#3c4242"}}>City*</label>
                    <input type="text" className="form-control border border-0 py-2" placeholder="Town / City" style={{backgroundColor:"#f6f6f6",fontSize:"15px",width:"217px"}}/>
                </div>
                <div className='ms-5'>
                    <label style={{color:"#3c4242"}}>State*</label><br></br>
                    <select className="border border-0 px-5 py-2" style={{backgroundColor:"#f6f6f6",fontSize:"15px",width:"217px",color:"#807d7e"}}>State*
                    <option>State</option>
                    </select>
                </div>
                <div className='ms-5'>
                    <label style={{color:"#3c4242"}}>Postal Code*</label>
                    <input type="text" className="form-control border border-0 py-2" placeholder="Postal Code" style={{backgroundColor:"#f6f6f6",fontSize:"15px",width:"217px"}}/>
                </div>
            </form>
            <br></br><br></br>

            <form className='input-group'>
                <div className="" >
                    <label style={{color:"#3c4242"}}>Phone*</label>
                    <input type="text" className="form-control border border-0 py-2" placeholder="Phone" style={{backgroundColor:"#f6f6f6",width:"350px",fontSize:"15px"}}/>
                </div>
            </form>
            <br></br>

            <button className='text-white border border-0 rounded-2 px-4 py-2 mt-4' style={{backgroundColor:"#8a33fd"}}>Continue to delivery</button>

            <form>
                <div class="mt-5">
                    <input type="checkbox"/>
                    <label className='ms-2' style={{color:"#3c4242"}}>Save my information for a faster checkout</label>
                </div>
            </form>

            <hr className='border border-1' style={{color:"#f6f6f6"}}></hr>
        </div>

        {/* order summary */}
        <div className='col-md-4 shadow' style={{marginLeft:"50px"}}>
            <label className='font-monoscope ms-3 fs-4 mt-4 fw-bold' style={{color:"#3c4242"}}>Order Summary</label>
            <hr className='border border-1' style={{color:"#f6f6f6"}}></hr>

            <div className='d-flex'>
                <img src={cart1} alt='' height='70px'/>
                <div className='ms-3 mt-2' style={{fontSize:"15px"}}>
                    <span className='' style={{color:"#807d7e"}} ><b style={{color:"#3c4242"}}>Blue Flower Print Crop Top</b> x 1</span><br></br>

                    <span style={{color:"#807d7e"}}><b style={{color:"#3c4242"}}>Color:</b> Yellow</span>

                    <span className='float-end' style={{marginRight:"-60px",fontSize:"13px",color:"#807d7e"}}>$29.00</span>
                </div>
            </div>

            <hr className='border border-1' style={{color:"#f6f6f6"}}></hr>

            <div className='d-flex'>
                <img src={cart2} alt='' height='70px'/>
                <div className='ms-3 mt-2' style={{fontSize:"15px"}}>
                    <span className='' style={{color:"#807d7e"}} ><b style={{color:"#3c4242"}}>Lavender Hoodie</b> x 2</span><br></br>

                    <span style={{color:"#807d7e"}}><b style={{color:"#3c4242"}}>Color:</b> Lavender</span>

                    <span className='float-end' style={{marginRight:"-130px",fontSize:"13px",color:"#807d7e"}}>$119.00</span>
                </div>
            </div>

            <hr className='border border-1' style={{color:"#f6f6f6"}}></hr>

            <div className='d-flex'>
                <img src={cart3} alt='' height='70px'/>
                <div className='ms-3 mt-2' style={{fontSize:"15px"}}>
                    <span className='' style={{color:"#807d7e"}} ><b style={{color:"#3c4242"}}>Black Sweatshirt</b> x 2</span><br></br>

                    <span style={{color:"#807d7e"}}><b style={{color:"#3c4242"}}>Color:</b> Black</span>

                    <span className='float-end' style={{marginRight:"-130px",fontSize:"13px",color:"#807d7e"}}>$123.00</span>
                </div>
            </div>  

            <hr className='border border-1' style={{color:"#f6f6f6"}}></hr>

            <div className=''>
                <b>Subtotal</b>
                <span>(3 times)</span>
                <b className='float-end me-4'>$513.00</b>    
            </div>

            <div className='mt-2'>
                <b>Savings</b>
                <b className='float-end me-4'>$-30.00</b>    
            </div>

            <hr className='border border-1' style={{color:"#f6f6f6"}}></hr>

            <div className=''>
                <b>Shipping</b>
                <b className='float-end me-4'>$-5.00</b>    
            </div>

            <hr className='border border-1' style={{color:"#f6f6f6"}}></hr>

            <div className='mb-4'>
                <b>Total</b>
                <b className='float-end me-4'>$478.00</b>    
            </div>
        </div>
    </MDBRow>
    </section>

    {/* shipping address content */}
    <div className='mt-4 ms-5'>
        <b  className='fs-5' style={{color:"#3c4242"}}>Shipping Address</b><br></br>
        <span className='fs-6' style={{color:"#807d7e"}}>Select the address that matches your card or payment method.</span>
    </div>

    <div className='mt-4 ms-5 rounded-3' style={{height:"auto",width:"57%" ,backgroundColor:"#f6f6f6"}}>
        <div className="ms-4">
            <input className="mt-4" type="radio" name="flexRadioDefault" checked />
            <label className="ms-3 fw-bold">Same as Billing address</label>
        </div>
        <hr className='ms-4' style={{width:"90%"}}></hr>
        <div className="ms-4 ">
            <input className="mt-1" type="radio" name="flexRadioDefault"/>
            <label className="ms-3 mb-3 fw-bold">Use a different shipping address</label>
        </div>
    </div>

    <hr className='ms-5 mt-4 border border-1' style={{width:"56%",color:"#f6f6f6"}}></hr>

    {/* shipping method content */}
    <div className='mt-4 ms-5'>
        <b  className='fs-5' style={{color:"#3c4242"}}>Shipping Method</b><br></br>
    </div>

    <div className='mt-4 ms-5 rounded-3' style={{height:"auto",width:"57%" ,backgroundColor:"#f6f6f6"}}>
        <div className="ms-4">
            <label className="ms-3 mt-4 fw-bold">Arrives by Monday,June 7</label>
        </div>
        <hr className='ms-4' style={{width:"90%"}}></hr>
        <div className="ms-4">
            <span className="ms-3 mt-1 fw-bold">Delivery Charges</span><br></br>
            <label className='ms-3 mb-3'>Additional fess may apply</label>
            <span className='float-end fw-bold me-5' style={{marginTop:"-13px"}}>$5.00</span>
        </div>
    </div>

    <hr className='ms-5 mt-4 border border-1' style={{width:"56%",color:"#f6f6f6"}}></hr>

    {/* payment method content */}
    <div className='mt-4 ms-5'>
        <b  className='fs-5' style={{color:"#3c4242"}}>Payment Method</b><br></br>
        <span className='fs-6' style={{color:"#807d7e"}}>All transactions are secure and encrypted.</span>
    </div>

    <div className='mt-4 ms-5 rounded-3' style={{height:"auto",width:"57%" ,backgroundColor:"#f6f6f6"}}>
        <div className="ms-4">
            <input className="mt-4" type="radio" name="flexRadioDefault" checked />
            <label className="ms-3 fw-bold">Credit Card</label>
            <br></br>
            <span className='ms-4'>We accept all major credit cards.</span>
            <div className='ms-4 mt-4'>
                <img src={payment1} alt='' />
                <img src={payment2} alt='' className='ms-4'/>
                <img src={payment3} alt='' className='ms-4'/>
                <img src={payment4} alt='' className='ms-4'/>
            </div>
            <form className='input-group mt-5 ms-4'>
                <div className="" >
                    <input type="text" className="form-control border border-1 py-2" placeholder="Card number" style={{width:"250px",fontSize:"15px"}}/>
                </div>
                <div className='ms-5'>
                    <input type="text" className="form-control border border-1 py-2" placeholder="Name of card" style={{width:"250px",fontSize:"15px"}}/>
                </div>
            </form>
            <form className='input-group mt-2 ms-4'>
                <div className="" >
                    <input type="text" className="form-control border border-1 py-2" placeholder="Expiration date (MM/YY)" style={{width:"250px",fontSize:"15px"}}/>
                </div>
                <div className='ms-5'>
                    <input type="password" className="form-control border border-1 py-2" placeholder="Security Code" style={{width:"250px",fontSize:"15px"}}/>
                    <i className='bi bi-eye float-end me-3' style={{marginTop:"-28px"}}></i>
                </div>
            </form>
        </div>
        <hr className='ms-4' style={{width:"90%"}}></hr>
        <div className="ms-4 ">
            <input className="mt-1" type="radio" name="flexRadioDefault"/>
            <label className="ms-3 fw-bold">Cash on delivery</label><br></br>
            <span className='ms-4'>Pay with cash upon delivery.</span>
        </div>
        <hr className='ms-4' style={{width:"90%"}}></hr>
        <div className="ms-4 ">
            <input className="mt-1" type="radio" name="flexRadioDefault"/>
            <label className="ms-3 mb-3 fw-bold">Paypol</label>
        </div>
    </div>

    <Link to='/contact-detail-page'>
    <button className='px-4 py-3 mt-5 ms-5 border border-0 rounded-3 text-white' style={{backgroundColor:"#8a33fd"}}>Pay Now</button>
    </Link>

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
