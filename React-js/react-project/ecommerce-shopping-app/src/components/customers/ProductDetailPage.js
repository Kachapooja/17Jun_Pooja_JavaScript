import React from 'react';
import { MDBContainer ,MDBRow} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import detail1 from '../../images/detail1.png';
import detail2 from '../../images/detail2.png';
import detail3 from '../../images/detail3.png';
import frame from '../../images/Frame 18.png';
import detail4 from '../../images/detail4.png';
import roundframe from '../../images/Ellipse frame.png';
import round1 from '../../images/Ellipse 1.png';
import round2 from '../../images/Ellipse 2.png';
import round3 from '../../images/Ellipse 3.png';
import round4 from '../../images/Ellipse 4.png';
import bgframe from '../../images/bg-round.png';
import rectangle from "../../images/Rectangle 21.png";
import line from '../../images/Line 2.png';
import table from '../../images/product tabel.png';
import frame1 from '../../images/Frame 2.png';
import detailimg1 from '../../images/list-img1.png';
import detailimg2 from '../../images/list-img2.png';
import limelight4 from '../../images/limelight4.png';
import detailimg3 from '../../images/list-img3.png';
import detailimg4 from '../../images/list-img4.png';
import detailimg5 from '../../images/list-img5.png';
import detailimg6 from '../../images/list-img6.png';
import detailimg7 from '../../images/list-img7.png';
import googleplay from '../../images/googleplay-logo.png';


export default function ProductDetailPage() {
  return (
    
<div>
<MDBContainer fluid className='detail-page'>

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
                    <li><Link to="/list-page" className="nav-item active"><span className='' style={{ color: "#3c4242" }}>Women</span></Link></li>
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
            <button className='border border-0 ms-2'>
                <i className='bi bi-person'></i>
            </button>
            </Link>
            <Link to='/cart-page'>
            <button className='border border-0 ms-2'>
                <i className='bi bi-cart'></i>
            </button>
            </Link>
        </div>
    </MDBRow>
    <hr />

    {/* detail section */}
    {/*  1st & 2nd part detail */}
    <MDBRow className=' flex-column' style={{backgroundColor:"#f6f6f6",height:"650px",width:"200px",marginTop:"-16px"}}>
        <div className='col-md-2' style={{marginTop:"60%",marginLeft:"20%"}} >
            <img src={detail1} alt="" width='100px' height='100px' />
            <img src={detail2} alt="" width='100px' height='100px' className='mt-4 border border-1 border-dark rounded-7' />
            <img src={detail3} alt="" width='100px' height='100px' className='mt-4'/>
            <img src={frame} alt='' className='ms-4 mt-4'/>
        </div>

        <div className='col-md-3' style={{marginLeft:"55%"}}>
            <img src={detail4} alt='' style={{height:"650px"}}/>
        </div>
    </MDBRow>

    {/*  3rd part detail */}
    <section style={{marginLeft:"700px"}} >
        <div className='d-flex font-monospace fs-5 fw-semibold' style={{color:"#807d7e",marginTop:"-620px"}}>
            <span>Shop</span>&nbsp;
            <i className='bi bi-chevron-right'></i>&nbsp;
            <span>Women</span>&nbsp;
            <i className='bi bi-chevron-right'></i>&nbsp;
            <span>Top</span>
            <br></br><br></br>
        </div>

        <h1 style={{color:"#3c4242"}}>Raven Hoodies With<br></br> Black colored Design</h1>

        <div className='d-flex text-warning mt-3'>
            <i className='bi bi-star-fill'></i>&nbsp;
            <i className='bi bi-star-fill'></i>&nbsp;
            <i className='bi bi-star-fill'></i>&nbsp;
            <i className='bi bi-star-fill'></i>&nbsp;
            <i className='bi bi-star-fill'></i>&nbsp;
            &nbsp;&nbsp;
            <div style={{color:"#807d7e"}}>
                <span>3.5</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <i className='bi bi-chat-left-text'></i>&nbsp;&nbsp;120 comment
            </div>
        </div>
            
        <div className='mt-3'>
            <span className='fw-semibold' style={{color:"#3f4646",letterSpacing:"0.1px"}}>Select Size</span>&emsp;&emsp;
            <span style={{color:"#807d7e"}}>Size Guide
            <i className='bi bi-arrow-right'></i></span>
        </div>
        
        <div>
            <button className='mt-4 border border-1 rounded-5 bg-transparent siz-btn'>XS</button>
            <button className='mt-4 ms-3 border border-1 rounded-5 bg-transparent siz-btn'>S</button>
            <button className='mt-4 ms-3 border border-1 rounded-5 bg-transparent siz-btn'>M</button>
            <button className='mt-4 ms-3 border border-1 rounded-5 bg-dark text-white siz-btn' >L</button>
            <button className='mt-4 ms-3 border border-1 rounded-5 bg-transparent siz-btn'>XL</button>
        </div>


        <div className='mt-4'>
            <span className='fw-semibold' style={{color:"#3c4242",letterSpacing:"0.1px"}}>Colours Available</span><br></br><br></br>

            <Link to='/'>
                <img src={roundframe} alt='' className='position-relative'/>
                <img src={round1} alt='' className='position-absolute mt-1' style={{marginLeft:'-26px'}}/>
            </Link>
            <Link to='/'>
                <img src={round2} alt='' className='ms-3'/>
            </Link>
            <Link to='/'>
                <img src={round3} alt='' className='ms-3'/>
            </Link>
            <Link to='/'>
                <img src={round4} alt='' className='ms-3'/>
            </Link>
        </div>

        <div className='mt-4'>
            <Link to='/cart-page'>
                <button className='text-white px-5 py-2 border border-0 rounded-3' style={{backgroundColor:"#8a33fd"}}><i className='bi bi-cart'></i>&nbsp;&nbsp;Add to cart</button>
            </Link>
            <button className='ms-5 px-5 py-2 border border-1 border-dark rounded-3 bg-transparent'>$63.00</button>
        </div>
        <hr className='mt-4'></hr>

        <div className='d-flex mt-4'>
            <div className='ms-4 d-flex'>
                <div className='' >
                    <Link to='/' style={{color:"#3c4242"}}>
                        <img src={bgframe} alt='' className='position-relative'/>
                        <i className='bi bi-credit-card position-absolute mt-2 fs-5' style={{marginLeft:"-32px"}}></i>
                    </Link>
                </div>
                <span className='mt-2 ms-3' style={{fontSize:"17px",color:"#3c4242"}}>Secure payment</span>
            </div>

            <div className='d-flex' style={{marginLeft:"22%"}}>
                <div className='' >
                    <Link to='/' style={{color:"#3c4242"}}>
                        <img src={bgframe} alt='' className='position-relative'/>
                        <i className='fa fa-t-shirt position-absolute fs-5' style={{marginLeft:"-35px",marginTop:"12px"}}></i>
                    </Link>
                </div>
                <span className='mt-2 ms-3' style={{fontSize:"17px",color:"#3c4242"}}>Size & Fit</span>
            </div>
        </div>

        <div className='d-flex mt-2'>
            <div className='ms-4 d-flex'>
                <div className='' >
                    <Link to='/' style={{color:"#3c4242"}}>
                        <img src={bgframe} alt='' className='position-relative'/>
                        <i className='bi bi-truck position-absolute mt-2 fs-5' style={{marginLeft:"-32px"}}></i>
                    </Link>
                </div>
                <span className='mt-2 ms-3' style={{fontSize:"17px",color:"#3c4242"}}>Free shipping</span>
            </div>

            <div className='d-flex' style={{marginLeft:"25%"}}>
                <div className='' >
                    <Link to='/' style={{color:"#3c4242"}}>
                        <img src={bgframe} alt='' className='position-relative'/>
                        <i className='bi bi-repeat position-absolute mt-2 fs-5' style={{marginLeft:"-32px"}}></i>
                    </Link>
                </div>
                <span className='mt-2 ms-3' style={{fontSize:"17px",color:"#3c4242"}}>Free Shipping & Returns</span>
            </div>
        </div>
    </section>

    {/* women product description */}
    <div className='mt-5 ms-5'>
        <img src={rectangle} alt='' style={{ marginTop: "-11px" }} />
        <span className='fs-2 ms-3' style={{ fontWeight: "600", color: "#3c4242" }}>Product Description</span>
    </div>

    <div>
        <div className='mt-4 ms-5' style={{fontSize:"18px"}}>
            <Link to='/'><span style={{color:"#3c4242"}}>Description</span></Link>&emsp;&emsp;
            <Link to='/'><span style={{color:"#807d7e"}}>User comments</span></Link>&emsp;
            <button className='text-white border border-0' style={{backgroundColor:"#8a33fd"}}>21</button>&emsp;&emsp;
            <Link to='/'><span style={{color:"#807d7e"}}>Question & Answer</span></Link>&emsp;
            <button className='text-white border border-0' style={{backgroundColor:"#3c4242"}}>4</button>
        </div>
        <img src={line} alt='' className='ms-5'/>

        <p className='ms-5 mt-4' style={{color:"#807d7e"}}>100% Bio-washed Cotton-makes the fabric extra soft & silky.Flexible ribbed crew<br></br>neck.Precisely stitched with no pilling & no fading.Provide all-time comfort.Anytime,<br></br>Anywhere.Infinite range of matte-finish HD prints.</p>

        <img src={table} alt='' className='ms-5 mt-4'/>

        <img src={frame1} alt='' className='ms-5' style={{marginTop:"-250px"}}/>
    </div> 

    {/* women similar product  */}
    <div className='mt-5 ms-5'>
        <img src={rectangle} alt='' style={{ marginTop: "-11px" }} />
        <span className='fs-2 ms-3' style={{ fontWeight: "600", color: "#3c4242" }}>Similar Products</span>
    </div>

    <div className='limelight-section mt-5'>
        <div>
            <img src={detailimg1} alt='' className='ms-5 position-relative' />
            <button className='hrt-btn border border-0 position-absolute mt-2'>
                <i className='bi bi-heart '></i>
            </button>
            <div className='mt-3' style={{marginLeft:"10%"}}>
                <span className='text-right ms-3 limelight1'>Black Sweatshirt with..</span>
                <br></br>  
                <span className=' ms-3 limelight2'>Jhanvi's Brand</span>
                <button className='pay-btn float-end border border-0'>$123.00</button>
            </div>
        </div>
        <div>
            <img src={detailimg2} alt='' className='position-relative' style={{marginLeft:"35px"}}/>
            <button className='hrt-btn border border-0 position-absolute mt-2'>
                <i className='bi bi-heart '></i>
            </button>
            <div className='mt-3' style={{marginLeft:"10%"}}>
                <span className='text-right ms-2 limelight1'>Line Pattern Black H..</span>
                <br></br>  
                <span className=' ms-2 limelight2'>AS's Brand</span>
                <button className='pay-btn float-end border border-0'>$37.00</button>
            </div>
        </div>
        <div>
            <img src={limelight4} alt='' className='position-relative' style={{marginLeft:"35px"}}/>
            <button className='hrt-btn border border-0 position-absolute mt-2'>
                <i className='bi bi-heart '></i>
            </button>
            <div className='mt-3' style={{marginLeft:"10%"}}>
                <span className='text-right ms-2 limelight1'>Black Shorts</span>
                <br></br>  
                <span className=' ms-2 limelight2'>MM's Brand</span>
                <button className='pay-btn float-end border border-0'>$37.00</button>
            </div>
        </div>
        <div>
            <img src={detailimg3} alt='' className='position-relative' style={{marginLeft:"35px"}}/>
            <button className='hrt-btn border border-0 position-absolute mt-2'>
                <i className='bi bi-heart '></i>
            </button>
            <div className='mt-3' style={{marginLeft:"10%"}}>
                <span className='text-right ms-2 limelight1'>Levender Hoodies with..</span>
                <br></br>  
                <span className=' ms-2 limelight2'>Nike's Brand</span>
                <button className='pay-btn float-end border border-0'>$119.00</button>
            </div>
        </div>
    </div>

    <div className='limelight-section mt-5'>
        <div>
            <img src={detailimg4} alt='' className='ms-5 position-relative'/>
            <button className='hrt-btn border border-0 position-absolute mt-2'>
                <i className='bi bi-heart '></i>
            </button>
            <div className='mt-3' style={{marginLeft:"10%"}}>
                <span className='text-right ms-3 limelight1'>Plain White T-Shirt</span>
                <br></br>  
                <span className=' ms-3 limelight2'>Jhanvi's Brand</span>
                <button className='pay-btn float-end border border-0'>$123.00</button>
            </div>
        </div>
        <div>
            <img src={detailimg5} alt='' className='position-relative' style={{marginLeft:"35px",height:"371px",width
        :"275px"}}/>
            <button className='hrt-btn border border-0 position-absolute mt-2'>
                <i className='bi bi-heart '></i>
            </button>
            <div className='mt-3' style={{marginLeft:"10%"}}>
                <span className='text-right ms-2 limelight1'>Checks Shirt with white..</span>
                <br></br>  
                <span className=' ms-2 limelight2'>HM's Brand</span>
                <button className='pay-btn float-end border border-0'>$123.00</button>
            </div>
        </div>
        <div>
            <img src={detailimg6} alt='' className='position-relative' style={{marginLeft:"35px"}}/>
            <button className='hrt-btn border border-0 position-absolute mt-2'>
                <i className='bi bi-heart '></i>
            </button>
            <div className='mt-3' style={{marginLeft:"10%"}}>
                <span className='text-right ms-2 limelight1'>One pece black top & ..</span>
                <br></br>  
                <span className=' ms-2 limelight2'>Nike's Brand</span>
                <button className='pay-btn float-end border border-0'>$123.00</button>
            </div>
        </div>
        <div>
            <img src={detailimg7} alt='' className='position-relative' style={{marginLeft:"35px"}}/>
            <button className='hrt-btn border border-0 position-absolute mt-2'>
                <i className='bi bi-heart '></i>
            </button>
            <div className='mt-3' style={{marginLeft:"10%"}}>
                <span className='text-right ms-2 limelight1'>Denim Blue Shirt..</span>
                <br></br>  
                <span className=' ms-2 limelight2'>MOMO's Brand</span>
                <button className='pay-btn float-end border border-0'>$38.00</button>
            </div>
        </div>
    </div>

    {/* footer section */}
    <footer className="footer mt-5">
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
