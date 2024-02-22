import React from 'react';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import logo from '../../images/logo.png';
import imgg1 from "../../images/slider.png";
import dealsimg1 from "../../images/deals-img1.jpg";
import dealsimg2 from "../../images/deals-img2.jpg";
import rectangle from "../../images/Rectangle 21.png";
import arrivelimg1 from "../../images/knitted-joggers.png";
import arrivelimg2 from "../../images/full-sleeve.png";
import arrivelimg3 from "../../images/active-t-shirt.png";
import arrivelimg4 from "../../images/urban-shirts.png";
import img1 from "../../images/Hawaiian-img.png";
import img2 from "../../images/Printed-img.png";
import img3 from "../../images/Cargo-img.png";
import img4 from "../../images/urban-img.png";
import img5 from "../../images/Oversized-img.png";
import comboimg from "../../images/combo-image.png";
import signupimg from '../../images/signup-img.png';
import men1 from "../../images/men-1.png";
import men2 from "../../images/men-2.png";
import men3 from "../../images/men-3.png";
import men4 from "../../images/men-4.png";
import men5 from "../../images/men-5.png";
import men6 from "../../images/men-6.png";
import men7 from "../../images/men-7.png";
import men8 from "../../images/men-8.png";
import women1 from "../../images/women-1.png";
import women2 from "../../images/women-2.png";
import women3 from "../../images/women-3.png";
import women4 from "../../images/women-4.png";
import rectanglesmall from "../../images/Rectangle-small.png";
import nike from "../../images/nike-img.png";
import hm from "../../images/h&m-img.png";
import levis from "../../images/levi's-img.png";
import uspolo from "../../images/u.s.polo-img.png";
import puma from "../../images/puma-img.png";
import limelight1 from "../../images/limelight1.png";
import limelight2 from "../../images/limelight2.png";
import limelight3 from "../../images/limelight3.png";
import limelight4 from "../../images/limelight4.png";
import feedback1 from '../../images/feedback1.png';
import feedback2 from '../../images/feedback2.png';
import feedback3 from '../../images/feedback3.png';
import googleplay from '../../images/googleplay-logo.png';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div>
            <MDBContainer fluid className='home-page'>

                {/* main header */}
                <MDBRow className=''>

                    <div className='col-md-2 text-center'>
                        <img src={logo} alt='logo' className='mt-3 ms-5 float-start' />
                    </div>

                    <div className='col-md-5'>
                        <nav className="mt-3 fs-5" id="coll">
                            <ul className="navbar-link">
                                <li><Link to="/" className="nav-item active"><span className='' style={{ color: "#3c4242" }}>Shop</span></Link></li>
                                <li><Link to="/" className="nav-item page-scroll">Men</Link></li>
                                <li><Link to="/list-page" className="nav-item page-scroll">Women</Link></li>
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

                {/* slider section */}
                <div className='slider-content'>
                    <img src={imgg1} className="img-content" alt="..." />

                    {/* img-1 content */}
                    <div className='content'>
                        <p className='text1'>T-Shirt / Tops</p>

                        <p className='text2'>Summer <br /> Value Pack</p>

                        <p className='text3'>cool / colorful / comfy</p>

                        <button className='shop-btn bg-white text-dark'>Shop Now</button>
                    </div>
                </div>

                {/* deals section */}
                <MDBRow className='deals ms-3'>
                    {/* deals section part-1 */}
                    <div className='col-md-3 '>
                        <img src={dealsimg1} alt='' />
                        {/* part-1 content */}
                        <div className='deal-content text-white'>
                            <h7 className="fs-5">Low Price</h7>
                            <h4 className='mt-3 fs-2'>High Coziness</h4>
                            <h7 className="mt-3 fs-6">UPTO 50% OFF</h7><br /><br />
                            <h7 className='mt-5 fs-6'><Link to='/' className='text-white text-decoration-underline'>Explore Items</Link></h7>
                        </div>
                    </div>

                    <div className='col-md-3'></div>

                    {/* deals section part-2 */}
                    <div className='col-md-3'>
                        <img src={dealsimg2} alt='' style={{ marginTop: "-7px" }} />
                        {/* part-2 content */}
                        <div className='deal-content1 text-white'>
                            <h7 className="fs-5">Beyong Presents</h7>
                            <h4 className='mt-3 fs-2'>Breezy Summer <br />Style</h4>
                            <h7 className="mt-3 fs-6">UPTO 50% OFF</h7><br /><br />
                            <h7 className='mt-5 fs-6'><Link to='/' className='text-white text-decoration-underline'>Explore Items</Link></h7>
                        </div>
                    </div>
                </MDBRow>

                {/* New Arrival section */}
                <div className='mt-5 ms-4'>
                    <img src={rectangle} alt='' style={{ marginTop: "-11px" }} />
                    <span className='fs-2 ms-3' style={{ fontWeight: "600", color: "#3c4242" }}>New Arrival</span>
                </div>

                <div className='arrival-section mt-5'>
                    <i className='bi bi-arrow-left-short fs-3 ms-3 arow'></i>
                    <div>
                        <img src={arrivelimg1} alt='' className='ms-3' />
                        <p className='text-right ms-3 tt'>Knitted Joggers</p>
                    </div>
                    <div>
                        <img src={arrivelimg2} alt='' className='ms-5' />
                        <p className='text-right ms-5 tt'>Full Sleeve</p>
                    </div>
                    <div>
                        <img src={arrivelimg3} alt='' className='ms-5' />
                        <p className='text-right ms-5 tt'>Active T-Shirts</p>
                    </div>
                    <div>
                        <img src={arrivelimg4} alt='' className='' style={{ marginLeft: "50px" }} />
                        <p className='text-right ms-5 tt'>Urban Shirts</p>
                    </div>
                    <i className='bi bi-arrow-right-short fs-3 float-end arow ms-3'></i>
                </div>

                {/* Big Saving Section */}
                <div className='mt-5 ms-4'>
                    <img src={rectangle} alt='' style={{ marginTop: "-11px" }} />
                    <span className='fs-2 ms-3' style={{ fontWeight: "600", color: "#3c4242" }}>Big Saving Zone</span>
                </div>

                <div className='big-saving-section mt-5 ms-4'>
                    <div className=''>
                        <img src={img1} alt='' />
                        <div className='big-saving-content'>
                            <b style={{ fontSize: "38px" }}>Hawaiian <br /> Shirts</b>
                            <p style={{ fontSize: "13px" }}>Dress up in summer vibe</p>
                            <p style={{ fontSize: "15px", fontWeight: "600" }}>UPTO 50% OFF</p>
                            <span className=' bi bi-arrow-down ms-4 fs-2'></span><br />
                            <button className='mt-3 shopnow-btn'>Shop Now</button>
                        </div>
                    </div>
                    <div className=''>
                        <img src={img2} alt='' className='' style={{ marginLeft: "9%" }} />
                        <div className='big-saving-content1'>
                            <button className='stock-btn ms-5'>Limited Stock</button><br />
                            <b style={{ fontSize: "38px" }}>Printed <br /> T-Shirt</b>
                            <p style={{ fontSize: "13px" }}>New Designs Every Week</p>
                            <p style={{ fontSize: "15px", fontWeight: "600" }}>UPTO 40% OFF</p>
                            <span className=' bi bi-arrow-down me-4 fs-2'></span><br />
                            <button className='mt-3 shopnow-btn'>Shop Now</button>
                        </div>
                    </div>
                    <div className=''>
                        <img src={img3} alt='' className='' style={{ marginLeft: "17%" }} />
                        <div className='big-saving-content2'>
                            <b style={{ fontSize: "38px" }}>Cargo <br /> Joggers</b>
                            <p style={{ fontSize: "13px" }}>Move with style & comfort</p>
                            <p style={{ fontSize: "15px", fontWeight: "600" }}>UPTO 50% OFF</p>
                            <span className=' bi bi-arrow-down me-4 fs-2'></span><br />
                            <button className='mt-3 shopnow-btn1'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className='big-saving-zone mt-5'>
                    <div className=''>
                        <img src={img4} alt='' className='ms-4' />
                        <div className='big-saving-zone1'>
                            <b style={{ fontSize: "38px" }}>Urban <br /> Shirts</b>
                            <p style={{ fontSize: "13px" }}>Live In Comfort</p>
                            <p style={{ fontSize: "15px", fontWeight: "600" }}>FLAT 60% OFF</p>
                            <span className=' bi bi-arrow-down ms-4 fs-2'></span><br />
                            <button className='mt-3 shopnow-btn1'>Shop Now</button>
                        </div>
                    </div>
                    <div className=''>
                        <img src={img5} alt='' className='ms-5' />
                        <div className='big-saving-zone2'>
                            <b style={{ fontSize: "38px" }}>Oversized <br /> T-Shirts</b>
                            <p style={{ fontSize: "13px" }}>Street Style Icon</p>
                            <p style={{ fontSize: "15px", fontWeight: "600" }}>FLAT 60% OFF</p>
                            <span className=' bi bi-arrow-down ms-4 fs-2'></span><br />
                            <button className='mt-3 shopnow-btn1'>Shop Now</button>
                        </div>
                    </div>
                </div>

                {/* Combo Image Section */}
                <div className='image-combo'>
                    <div>
                        <img src={comboimg} alt='' className='comboimg' />
                        <div className='comboimg-text'>
                            <b className='fs-2'>WE MADE YOUR EVERYDAY <br /> FASHION BETTER!</b>
                            <p className="we-made-text" >In our journey to improve everyday fashion, <br /> euphoria presents EVERYDAY wear range - <br /> Comfortable & Affordable fashion 24/7</p>
                            <button className='shop-btn1 bg-white text-dark'>Shop Now</button>
                        </div>
                    </div>
                    <img src={signupimg} alt='' className='signup' style={{ height: "640px" }} />
                </div>

                {/* Categories for men Section */}
                <div className='mt-5 ms-5'>
                    <img src={rectangle} alt='' style={{ marginTop: "-11px" }} />
                    <span className='fs-2 ms-3' style={{ fontWeight: "600", color: "#3c4242" }}>Categories For Men</span>
                </div>

                <div className='men-section1 mt-5'>
                    <div>
                        <img src={men1} alt='' className='ms-5' />
                        <div className='mt-3' style={{marginLeft:"10%"}}>
                            <span className='text-right ms-3 men-text1'>Shirts</span>
                            <br></br>  
                            <span className=' ms-3'>Explore Now!</span>
                            <i className='bi bi-arrow-right-short fs-3 men-text2'></i>
                        </div>
                    </div>
                    <div>
                        <img src={men2} alt='' className='ms-5' />
                        <div className='mt-3' style={{marginLeft:"10%"}}>
                            <span className='text-right ms-3 men-text1'>Printed T-Shirts</span>
                            <br></br>  
                            <span className=' ms-3'>Explore Now!</span>
                            <i className='bi bi-arrow-right-short fs-3 men-text2'></i>
                        </div>
                    </div>
                    <div>
                        <img src={men3} alt='' className='ms-5' />
                        <div className='mt-3' style={{marginLeft:"10%"}}>
                            <span className='text-right ms-3 men-text1'>Plain T-Shirts</span>
                            <br></br>  
                            <span className=' ms-3'>Explore Now!</span>
                            <i className='bi bi-arrow-right-short fs-3 men-text2'></i>
                        </div>
                    </div>
                    <div>
                        <img src={men4} alt='' className='ms-5' /> 
                        <div className='mt-3' style={{marginLeft:"10%"}}>
                            <span className='text-right ms-3 men-text1'>Polo T-Shirts</span>
                            <br></br>  
                            <span className=' ms-3'>Explore Now!</span>
                            <i className='bi bi-arrow-right-short fs-3 men-text2'></i>
                        </div>
                    </div>
                </div>

                <div className='men-section2 mt-5'>
                    <div>
                        <img src={men5} alt='' className='ms-5' />
                        <div className='mt-3' style={{marginLeft:"10%"}}>
                            <span className='text-right ms-3 men-text1'>Hoodies & Sweatshirt</span>
                            <br></br>  
                            <span className=' ms-3'>Explore Now!</span>
                            <i className='bi bi-arrow-right-short fs-3 men-text2'></i>
                        </div>
                    </div>
                    <div>
                        <img src={men6} alt='' className='ms-5' />
                        <div className='mt-3' style={{marginLeft:"10%"}}>
                            <span className='text-right ms-3 men-text1'>Jeans</span>
                            <br></br>  
                            <span className=' ms-3'>Explore Now!</span>
                            <i className='bi bi-arrow-right-short fs-3 men-text2'></i>
                        </div>
                    </div>
                    <div>
                        <img src={men7} alt='' className='ms-5' />
                        <div className='mt-3' style={{marginLeft:"10%"}}>
                            <span className='text-right ms-3 men-text1'>Activewear</span>
                            <br></br>  
                            <span className=' ms-3'>Explore Now!</span>
                            <i className='bi bi-arrow-right-short fs-3 men-text2'></i>
                        </div>
                    </div>
                    <div>
                        <img src={men8} alt='' className='ms-5'/>
                        <div className='mt-3' style={{marginLeft:"10%"}}>
                            <span className='text-right ms-3 men-text1'>Boxers</span>
                            <br></br>  
                            <span className=' ms-3'>Explore Now!</span>
                            <i className='bi bi-arrow-right-short fs-3 men-text2'></i>
                        </div>
                    </div>
                </div>

                {/* Categories for women Section */}
                <div className='mt-5 ms-5'>
                    <img src={rectangle} alt='' style={{ marginTop: "-11px" }} />
                    <span className='fs-2 ms-3' style={{ fontWeight: "600", color: "#3c4242" }}>Categories For Women</span>
                </div>

                <div className='women-section mt-5'>
                    <div>
                        <img src={women1} alt='' className='ms-5' />
                        <div className='mt-3' style={{marginLeft:"10%"}}>
                            <span className='text-right ms-3 women-text1'>Hoodies & Sweatshirt</span>
                            <br></br>  
                            <span className=' ms-3'>Explore Now!</span>
                            <i className='bi bi-arrow-right-short fs-3 women-text2'></i>
                        </div>
                    </div>
                    <div>
                        <img src={women2} alt='' className='ms-5' />
                        <div className='mt-3' style={{marginLeft:"10%"}}>
                            <span className='text-right ms-3 women-text1'>Coats & Parkas</span>
                            <br></br>  
                            <span className=' ms-3'>Explore Now!</span>
                            <i className='bi bi-arrow-right-short fs-3 women-text2'></i>
                        </div>
                    </div>
                    <div>
                        <img src={women3} alt='' className='ms-5' />
                        <div className='mt-3' style={{marginLeft:"10%"}}>
                            <span className='text-right ms-3 women-text1'>Teas &T-Shirts</span>
                            <br></br>  
                            <span className=' ms-3'>Explore Now!</span>
                            <i className='bi bi-arrow-right-short fs-3 women-text2'></i>
                        </div>
                    </div>
                    <div>
                        <img src={women4} alt='' className='ms-5' /> 
                        <div className='mt-3' style={{marginLeft:"10%"}}>
                            <span className='text-right ms-3 women-text1'>Boxers</span>
                            <br></br>  
                            <span className=' ms-3'>Explore Now!</span>
                            <i className='bi bi-arrow-right-short fs-3 women-text2'></i>
                        </div>
                    </div>
                </div>

                {/* top brand deal */}
                <div className='ms-5' style={{marginTop:"80px"}}>
                    <div className='rectangle'>
                        <div className='top-brand'>
                            <h5 className="fs-1 fw-bold text-white">Top Brand Deals</h5>
                            <span className='fs-5 text-white'>Up To <span className='text-warning'>60%</span> off on brands</span>
                        </div>
                        {/* branded icon img */}
                        <div className='rec-small'>
                            <div>
                                <img src={rectanglesmall} alt='' className='nike-square ms-2'/>
                                <div className='nike-img'>
                                    <img  src={nike} alt=''/>
                                </div>
                            </div>
                            <div>
                                <img src={rectanglesmall} alt='' className='hm-square'/>
                                <div className='hm-img'>
                                    <img  src={hm} alt=''/>
                                </div>
                            </div>
                            <div>
                                <img src={rectanglesmall} alt='' className='levis-square'/>
                                <div className='levis-img'>
                                    <img  src={levis} alt=''/>
                                </div>
                            </div>
                            <div>
                                <img src={rectanglesmall} alt='' className='uspolo-square'/>
                                <div className='uspolo-img'>
                                    <img  src={uspolo} alt=''/>
                                </div>
                            </div>
                            <div>
                                <img src={rectanglesmall} alt='' className='puma-square'/>
                                <div className='puma-img'>
                                    <img  src={puma} alt=''/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* lime-light Section */}
                <div className='mt-5 ms-5'>
                    <img src={rectangle} alt='' style={{ marginTop: "-11px" }} />
                    <span className='fs-2 ms-3' style={{ fontWeight: "600", color: "#3c4242" }}>In The Limelight</span>
                </div>

                <div className='limelight-section mt-5'>
                    <div>
                        <img src={limelight1} alt='' className='ms-5 position-relative' />
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
                        <img src={limelight2} alt='' className='position-relative' style={{marginLeft:"35px"}}/>
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
                        <img src={limelight3} alt='' className='position-relative' style={{marginLeft:"35px"}}/>
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
                        <img src={limelight4} alt='' className='position-relative' style={{marginLeft:"35px"}}/>
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

                {/* feedback Section */}
                <div className='mt-5 ms-5'>
                    <img src={rectangle} alt='' style={{ marginTop: "-11px" }} />
                    <span className='fs-2 ms-3' style={{ fontWeight: "600", color: "#3c4242" }}>Feedback</span>
                </div>

                <MDBRow className='mt-5 justify-content-around'>
                <div className='fdbk col-md-3 border border-1 rounded '>
                        <img src={feedback1} alt='' className='ms-3 mt-3'/>
                        <span className='mt-3 me-3 text-warning float-end'>
                        <i className='bi bi-star-fill'></i>&nbsp;
                        <i className='bi bi-star-fill'></i>&nbsp;
                        <i className='bi bi-star-fill'></i>&nbsp;
                        <i className='bi bi-star-half'></i>&nbsp;
                        <i className='bi bi-star'></i>
                        </span>
                        <br></br>
                        <span className='ms-3 fw-bold fs-5 hd'>Floyd Miles</span>
                        <br></br>
                        <p className='feedback1 ms-3'>Amet minim molit non deserunt uilamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit molit.</p>
                        <p className='feedback1 ms-3'>Exercitation veniam consequat sunt nostrud amet.Amet minim molit non deserunt uilamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit molit.Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <div className='fdbk col-md-3 border border-1 rounded' style={{marginLeft:"-60px"}}>
                    <img src={feedback2} alt='' className='ms-3 mt-3'/>
                    <span className='mt-3 me-3 text-warning float-end'>
                    <i className='bi bi-star-fill'></i>&nbsp;
                    <i className='bi bi-star-fill'></i>&nbsp;
                    <i className='bi bi-star-fill'></i>&nbsp;
                    <i className='bi bi-star-half'></i>&nbsp;
                    <i className='bi bi-star'></i>
                    </span>
                    <br></br>
                    <span className='ms-3 fw-bold fs-5 hd'>Ronald Richards</span>
                    <br></br>
                    <p className='feedback1 ms-3'>Uilamco est sit aliqua do amet sint.Velit officia consequat duis enim velit molit.Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <div className='fdbk col-md-3 border border-1 rounded' style={{marginLeft:"-60px"}}>
                        <img src={feedback3} alt='' className='ms-3 mt-3'/>
                        <span className='mt-3 me-3 text-warning float-end'>
                        <i className='bi bi-star-fill'></i>&nbsp;
                        <i className='bi bi-star-fill'></i>&nbsp;
                        <i className='bi bi-star-fill'></i>&nbsp;
                        <i className='bi bi-star-half'></i>&nbsp;
                        <i className='bi bi-star'></i>
                        </span>
                        <br></br>
                        <span className='ms-3 fw-bold fs-5 hd'>Savannah Nguyen</span>
                        <br></br>
                        <p className='feedback1 ms-3'>Amet minim molit non deserunt uilamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit molit.</p>
                        <p className='feedback1 ms-3'>Exercitation veniam consequat sunt nostrud amet.Amet minim molit non deserunt uilamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit molit.Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                </MDBRow>

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

                <hr />
            </MDBContainer>
        </div>
    )
}
