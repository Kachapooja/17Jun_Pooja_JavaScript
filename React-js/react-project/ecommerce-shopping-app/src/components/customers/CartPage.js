import React from 'react';
import { MDBContainer,MDBRow } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png';
import cartrow from '../../images/cart-row.png';
import cart1 from '../../images/cart1.png';
import cart2 from '../../images/cart2.png';
import cart3 from '../../images/cart3.png';
import googleplay from '../../images/googleplay-logo.png';


export default function CartPage() {
  return (
<div>
<MDBContainer fluid className='cart-page'>

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

    {/* add to cart contain */}

    <section className=''>
        <div className='ms-5 mt-5 d-flex fs-5 fw-lighter fw-semibold' style={{color:"#807d7e"}}>
            <span>Home</span>&nbsp;
            <i className='bi bi-chevron-right'></i>&nbsp;
            <span style={{color:"#3c4242"}}>Add To Cart</span>            
            <br></br><br></br>
        </div>
        <p className='ms-5' style={{color:"#807d7e"}}>Please fill in the fields below and click place order to complete your purchase!<br></br>Already registered?<Link to='/' style={{color:"#8a33fd"}}>Please login here</Link></p>
    </section>

    {/* cart detail */}
    <section className='mt-5'>

        <img src={cartrow} alt='' className='' style={{width:"101.8%",marginLeft:"-12px"}}/>

        <div className='d-flex mt-5'>
            <img src={cart1} alt='' style={{marginLeft:"6%"}}/>
            <div className='ms-4' style={{color:"#807d7e"}}>
                <b style={{color:"#3c4242",fontSize:"15px"}}>Blue Flower Print Crop Top</b><br></br>
                <span style={{fontSize:"13px"}}>Color:Yellow</span><br></br>
                <span style={{fontSize:"13px"}}>Size:M</span>
            </div>
            <span className='price-tab'>$29.00</span>
            <button className='border border-0 rounded-5 px-4 cart-btn'>- &emsp;1 &emsp;+</button>
            <span className='free-tab'>Free</span>
            <span className='price-total-tab'>$29.00</span>
            <i className='bi bi-trash text-primary'></i>
        </div>

        <div className='d-flex mt-5'>
            <img src={cart2} alt='' style={{marginLeft:"6%"}}/>
            <div className='ms-4' style={{color:"#807d7e"}}>
                <b style={{color:"#3c4242",fontSize:"15px"}}>Lavender Hoodies</b><br></br>
                <span style={{fontSize:"13px"}}>Color:Levender</span><br></br>
                <span style={{fontSize:"13px"}}>Size:XXL</span>
            </div>
            <span className='price-tab1'>$119.00</span>
            <button className='border border-0 rounded-5 px-4 cart-btn'>- &emsp;2 &emsp;+</button>
            <span className='free-tab'>Free</span>
            <span className='price-total-tab'>$119.00</span>
            <i className='bi bi-trash text-primary'></i>
        </div>

        <div className='d-flex mt-5'>
            <img src={cart3} alt='' style={{marginLeft:"6%"}}/>
            <div className='ms-4' style={{color:"#807d7e"}}>
                <b style={{color:"#3c4242",fontSize:"15px"}}>Black Sweatshirt</b><br></br>
                <span style={{fontSize:"13px"}}>Color:Black</span><br></br>
                <span style={{fontSize:"13px"}}>Size:XXL</span>
            </div>
            <span className='price-tab2'>$123.00</span>
            <button className='border border-0 rounded-5 px-4 cart-btn'>- &emsp;2 &emsp;+</button>
            <span className='free-tab'>Free</span>
            <span className='price-total-tab'>$123.00</span>
            <i className='bi bi-trash text-primary'></i>
        </div>

    </section>

    {/* cart discount */}
    <MDBRow className='mt-5 dscnt'>
        <div className='col-md-5 ms-5 mt-4'>
            <h5 style={{color:"#3c4242"}}>Discount Codes</h5>
            <span style={{color:"#807d7e"}}>Enter your coupon code if you have one</span><br></br><br></br>
            <input type='text' className='py-1 border border-1 rounded-start' />
            <button className='py-1 px-4 border border-1 rounded-end text-white' style={{backgroundColor:"#8a33fd",marginLeft:"-10px"}}>Apply Coupon</button><br></br><br></br>
            <button className='px-4 py-1 border border-1 rounded-3 bg-white' style={{color:"#3c4242"}}>Continue Shopping</button>
        </div>
        <div className='col-md-4 mt-4 total' style={{marginLeft:"15%",color:"#3c4242"}}>
            <span>Sub Total</span>&emsp;&emsp;&emsp;&emsp;&emsp;
            <span>$513.00</span><br></br>
            <span>Shipping</span>&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;
            <span>$5.00</span>
            <br></br><br></br>
            <span className='fw-bold'>Grand Total</span>&emsp;&emsp;&emsp;&ensp;&nbsp;
            <span className='fw-bold'>$518.00</span>
            <hr className='w-75'></hr><br></br>
            <Link to="/check-out-page"><button className='ms-5 py-1 px-4 border border-1 rounded-2 text-white' style={{backgroundColor:"#8a33fd",fontSize:"15px"}}>Proceed To Checkout</button></Link>
        </div>
    </MDBRow>

    {/* footer section */}
    <footer className="footer">
        <MDBRow className='footer-body ms-5'>
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
