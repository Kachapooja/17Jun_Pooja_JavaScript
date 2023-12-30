import React from 'react';
import { MDBContainer ,MDBRow } from 'mdb-react-ui-kit';
import logo from '../../images/logo.png';
import filter from '../../images/filter.png';
import priceline from '../../images/One.png';
import purple from '../../images/purple.png';
import black from '../../images/black.png';
import red from '../../images/red.png';
import orange from '../../images/orange.png';
import navy from '../../images/navy.png';
import white from '../../images/white.png';
import broom from '../../images/broom.png';
import green from '../../images/green.png';
import yellow from '../../images/yellow.png';
import gray from '../../images/gray.png';
import pink from '../../images/pink.png';
import blue from '../../images/blue.png';
import limelight1 from '../../images/limelight1.png';
import women4 from '../../images/women-4.png';
import limelight4 from '../../images/limelight4.png';
import w5 from '../../images/w-5.png';
import w1 from '../../images/w-1.png';
import limelight3 from '../../images/limelight3.png';
import w6 from '../../images/w-6.png';
import w2 from '../../images/w-2.png';
import w3 from '../../images/w-3.png';
import w4 from '../../images/w-4.png';
import women3 from '../../images/women-3.png';
import limelight2 from '../../images/limelight2.png';
import rectangle from "../../images/Rectangle 21.png";
import { Link } from 'react-router-dom';



export default function ProductListPage() {
  return (
<div>
<MDBContainer fluid className='list-page'>

    {/*  main header section   */}
    <MDBRow className=''>

        <div className='col-md-2 text-center'>
            <img src={logo} alt='logo' className='mt-3 ms-5 float-start' />
        </div>

        <div className='col-md-5'>
            <nav className="mt-3 fs-5" id="coll">
                <ul className="navbar-link">
                    <li><Link to="/" className="nav-item page-scroll">Shop</Link></li>
                    <li><Link to="/" className="nav-item page-scroll">Men</Link></li>
                    <li><Link to="/" className="nav-item active"><span className='' style={{ color: "#3c4242" }}>Women</span></Link></li>
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
            <button className='border border-0 ms-2'>
                <i className='bi bi-cart'></i>
            </button>
        </div>
    </MDBRow>
    <hr />

    {/*   Side Section   */}
    <div className='vl'>
        {/*    filter tab    */}
        <div className=''>
            <span className='ms-4 fs-4' style={{color:"#807d7e"}}>Filter</span>
            <img src={filter} alt='' style={{marginLeft:"11%",marginTop:"-10px"}}/>
        </div>
        <hr style={{width:"276px",marginTop:"5px"}}/>

        {/* filter tab details */}
        <div className=''>
        <MDBRow style={{color:"#8a8989",fontSize:"18px"}}>
            <div className='col-md-2'>
                <span className='ms-4 '>Tops</span>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1' style={{color:"#8a8989" ,fontSize:"18px"}}>
            <div className='col-md-2'>
                <span className='ms-4'>Printed T-Shirts</span>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1' style={{color:"#8a8989" ,fontSize:"18px"}}>
            <div className='col-md-2'>
                <span className='ms-4'>Plain T-Shirt</span>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1' style={{color:"#8a8989" ,fontSize:"18px"}}>
            <div className='col-md-2'>
                <span className='ms-4'>Kurti</span>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1'style={{color:"#8a8989" ,fontSize:"18px"}}>
            <div className='col-md-2'>
                <span className='ms-4'>Boxers</span>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1' style={{color:"#8a8989" ,fontSize:"18px"}}>
            <div className='col-md-2'>
                <span className='ms-4'>Full Sleeve T-shirts</span>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1'style={{color:"#8a8989" ,fontSize:"18px"}}>
            <div className='col-md-2'>
                <span className='ms-4'>Joggers</span>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1' style={{color:"#8a8989" ,fontSize:"18px"}}>
            <div className='col-md-2'>
                <span className='ms-4'>Payjamas</span>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1' style={{color:"#8a8989" ,fontSize:"18px"}}>
            <div className='col-md-2'>
                <span className='ms-4'>Jeans</span>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        </div>
        <hr className='mt-3' style={{width:"276px",marginTop:"5px"}}/>

        {/*    price tab   */}
        <div className=''>
            <span className='ms-4 fs-4' style={{color:"#807d7e"}}>Price</span>
            <i className='bi bi-chevron-up' style={{marginLeft:"11%"}}></i>
        </div>
        <hr className='mt-3' style={{width:"276px",marginTop:"5px"}}/>

        {/* price tab details */}
        <img src={priceline} alt='' className='ms-4 mt-2'/><br/><br/>
        <div className='mb-4'>
            <button className='border border-1 rounded bg-transparent ms-4 price-btn'>$70</button>
            <button className='border border-1 rounded bg-transparent ms-4 price-btn'>$600</button>
        </div>
        <hr className='mt-3' style={{width:"276px",marginTop:"5px"}}/>

        {/*    colors tab   */}
        <div className=''>
            <span className='ms-4 fs-4' style={{color:"#807d7e"}}>Colors</span>
            <i className='bi bi-chevron-up' style={{marginLeft:"11%"}}></i>
        </div>
        <hr className='mt-3' style={{width:"276px",marginTop:"5px"}}/>

        {/* colors tab details */}
        {/* color tab 1st row */}
        <div className='d-flex ms-3 mt-4'>
        <Link to='' className='text-center' style={{color:"#8a8989"}}>
            <img src={purple} alt='' className=''/><br></br>
            <span>Purple</span>
        </Link>
        <Link to='' className='ms-4 text-center' style={{color:"#8a8989"}}>            
            <img src={black} alt='' /><br></br>
            <span>Black</span>
        </Link>
        <Link to='' className='ms-4 text-center' style={{color:"#8a8989"}}>            
            <img src={red} alt=''/><br></br>
            <span>Red</span>
        </Link>
        <Link to='' className='ms-3 text-center' style={{color:"#8a8989"}}>            
            <img src={orange} alt=''/><br></br>
            <span>Orange</span>
        </Link>
        </div>

        {/* color tab 2nd row */}
        <div className='d-flex ms-3 mt-2'>
        <Link to='' className='text-center' style={{color:"#8a8989"}}>
            <img src={navy} alt=''/><br></br>
            <span>Navy</span>
        </Link>
        <Link to='' className='ms-4 text-center' style={{color:"#8a8989"}}>            
            <img src={white} alt='' /><br></br>
            <span>White</span>
        </Link>
        <Link to='' className='ms-4 text-center' style={{color:"#8a8989"}}>            
            <img src={broom} alt=''/><br></br>
            <span>Broom</span>
        </Link>
        <Link to='' className='ms-3 text-center' style={{color:"#8a8989"}}>            
            <img src={green} alt=''/><br></br>
            <span>Green</span>
        </Link>
        </div>

        {/* color tab 3rd row */}
        <div className='d-flex ms-3 mt-2'>
        <Link to='' className='text-center' style={{color:"#8a8989"}}>
            <img src={yellow} alt=''/><br></br>
            <span>Yellow</span>
        </Link>
        <Link to='' className='ms-4 text-center' style={{color:"#8a8989"}}>            
            <img src={gray} alt='' /><br></br>
            <span>Gray</span>
        </Link>
        <Link to='' className='ms-4 text-center' style={{color:"#8a8989"}}>            
            <img src={pink} alt=''/><br></br>
            <span>Pink</span>
        </Link>
        <Link to='' className='ms-4 text-center' style={{color:"#8a8989"}}>            
            <img src={blue} alt=''/><br></br>
            <span>Blue</span>
        </Link>
        </div>
        <hr className='mt-4' style={{width:"276px",marginTop:"5px"}}/>

        {/*    size section   */}
        <div className=''>
            <span className='ms-4 fs-4' style={{color:"#807d7e"}}>Size</span>
            <i className='bi bi-chevron-up' style={{marginLeft:"11%"}}></i>
        </div>
        <hr className='mt-3' style={{width:"276px",marginTop:"5px"}}/>

        {/* size section details */}
        <div className='mt-5 ms-3'>
            <button className='border border-1  bg-transparent size-btn'>XXS</button>
            <button className='border border-1  bg-transparent size-btn'>XL</button>
            <button className='border border-1  bg-transparent size-btn'>XS</button>
        </div>
        <div className='mt-4 ms-3'>
            <button className='border border-1  bg-transparent size-btn'>S</button>
            <button className='border border-1  bg-transparent ms-4 size-btn'>M</button>
            <button className='border border-1  bg-transparent ms-4 size-btn'>L</button>
        </div>
        <div className='mt-4 ms-3'>
            <button className='border border-1  bg-transparent size-btn'>XXL</button>
            <button className='border border-1  bg-transparent  size-btn'>3XL</button>
            <button className='border border-1  bg-transparent size-btn'>4XL</button>
        </div>
        <hr className='mt-5' style={{width:"276px",marginTop:"5px"}}/>

        {/*    Dress style section   */}
        <div className=''>
            <span className='ms-4 fs-4' style={{color:"#807d7e"}}>Dress Style</span>
            <i className='bi bi-chevron-up' style={{marginLeft:"6%"}}></i>
        </div>
        <hr className='mt-3' style={{width:"276px",marginTop:"5px"}}/>

        {/* dress style details */}
        <div className=''>
        <MDBRow style={{color:"#8a8989" ,fontSize:"18px"}}>
            <div className='col-md-2'>
                <span className='ms-4'>Classic</span>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1' style={{color:"#8a8989"  ,fontSize:"18px"}}>
            <div className='col-md-2'>
                <span className='ms-4'>Casual</span>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1' style={{color:"#8a8989" ,fontSize:"18px"}}>
            <div className='col-md-2'>
                <span className='ms-4'>Business</span>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1' style={{color:"#8a8989" ,fontSize:"18px"}}>
            <div className='col-md-2'>
                <span className='ms-4'>Sports</span>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1' style={{color:"#8a8989" ,fontSize:"18px"}}>
            <div className='col-md-2'>
                <span className='ms-4'>Elegant</span>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1' style={{color:"#8a8989" ,fontSize:"18px"}}>
            <div className='col-md-2'>
                <span className='ms-4'>Formal(evening)</span>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        </div>
        <hr className='mt-3' style={{width:"276px",marginTop:"5px"}}/>

        <div className='vl1'></div>

    </div>
    {/*   main content section   */}
    <MDBRow className='main-content' >
        <div className="col-md-8">
            <span className='fw-semibold fs-4' style={{color:"#3f4646"}}>Women's Clothing</span>
        </div>
        <div className="col-md-1 ms-3">
            <span className='fs-5' style={{color:"#8a33fd"}} >New</span>
        </div>
        <div className="col-md-1 ms-3">
            <span className='fs-5' style={{color:"#3f4646"}}>Recommended</span>
        </div>
    </MDBRow>

    {/* women section */}
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
            <img src={women4} alt='' className='position-relative' style={{marginLeft:"35px",height:"371px",width
        :"275px"}}/>
            <button className='hrt-btn border border-0 position-absolute mt-2'>
                <i className='bi bi-heart '></i>
            </button>
            <div className='mt-3' style={{marginLeft:"10%"}}>
                <span className='text-right ms-2 limelight1'>White T-Shirt</span>
                <br></br>  
                <span className=' ms-2 limelight2'>Helen's Brand</span>
                <button className='pay-btn float-end border border-0'>$11.00</button>
            </div>
        </div>
        <div>
            <img src={limelight4} alt='' className='position-relative' style={{marginLeft:"35px"}}/>
            <button className='hrt-btn border border-0 position-absolute mt-2'>
                <i className='bi bi-heart '></i>
            </button>
            <div className='mt-3' style={{marginLeft:"10%"}}>
                <span className='text-right ms-2 limelight1'>Lavender Hoodie with..</span>
                <br></br>  
                <span className=' ms-2 limelight2'>Nike's Brand</span>
                <button className='pay-btn float-end border border-0'>$119.00</button>
            </div>
        </div>
    </div>
    <div className='limelight-section mt-5'>
        <div>
            <img src={w5} alt='' className='position-relative' style={{marginLeft:"35px"}}/>
            <button className='hrt-btn border border-0 position-absolute mt-2'>
                <i className='bi bi-heart '></i>
            </button>
            <div className='mt-3' style={{marginLeft:"10%"}}>
                <span className='text-right ms-2 limelight1'>Leaves Pattern White..</span>
                <br></br>  
                <span className=' ms-2 limelight2'>paypal's Brand</span>
                <button className='pay-btn float-end border border-0'>$77.00</button>
            </div>
        </div>
        <div>
            <img src={w1} alt='' className='position-relative' style={{marginLeft:"35px"}}/>
            <button className='hrt-btn border border-0 position-absolute mt-2'>
                <i className='bi bi-heart '></i>
            </button>
            <div className='mt-3' style={{marginLeft:"10%"}}>
                <span className='text-right ms-2 limelight1'>White Graphic Crop Top</span>
                <br></br>  
                <span className=' ms-2 limelight2'>woden's Brand</span>
                <button className='pay-btn float-end border border-0'>$29.00</button>
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
    </div>
    <div className='limelight-section mt-5'>
        <div>
            <img src={w6} alt='' className='position-relative' style={{marginLeft:"35px"}}/>
            <button className='hrt-btn border border-0 position-absolute mt-2'>
                <i className='bi bi-heart '></i>
            </button>
            <div className='mt-3' style={{marginLeft:"10%"}}>
                <span className='text-right ms-2 limelight1'>Barboreal Gray Sweats..</span>
                <br></br>  
                <span className=' ms-2 limelight2'>Priya's Brand</span>
                <button className='pay-btn float-end border border-0'>$77.00</button>
            </div>
        </div>
        <div>
            <img src={w2} alt='' className='position-relative' style={{marginLeft:"35px"}}/>
            <button className='hrt-btn border border-0 position-absolute mt-2'>
                <i className='bi bi-heart '></i>
            </button>
            <div className='mt-3' style={{marginLeft:"10%"}}>
                <span className='text-right ms-2 limelight1'>Yellow Sweatshirt</span>
                <br></br>  
                <span className=' ms-2 limelight2'>woden's Brand</span>
                <button className='pay-btn float-end border border-0'>$29.00</button>
            </div>
        </div>
        <div>
            <img src={w3} alt='' className='position-relative' style={{marginLeft:"35px"}}/>
            <button className='hrt-btn border border-0 position-absolute mt-2'>
                <i className='bi bi-heart '></i>
            </button>
            <div className='mt-3' style={{marginLeft:"10%"}}>
                <span className='text-right ms-2 limelight1'>Flower Pattern Black C..</span>
                <br></br>  
                <span className=' ms-2 limelight2'>MM's Brand</span>
                <button className='pay-btn float-end border border-0'>$37.00</button>
            </div>
        </div>
    </div>
    <div className='limelight-section mt-5'>
        <div>
            <img src={w4} alt='' className='position-relative' style={{marginLeft:"35px"}}/>
            <button className='hrt-btn border border-0 position-absolute mt-2'>
                <i className='bi bi-heart '></i>
            </button>
            <div className='mt-3' style={{marginLeft:"10%"}}>
                <span className='text-right ms-2 limelight1'>Don't Graphic T-Shirt </span>
                <br></br>  
                <span className=' ms-2 limelight2'>Nisargi's Brand</span>
                <button className='pay-btn float-end border border-0'>$77.00</button>
            </div>
        </div>
        <div>
            <img src={women3} alt='' className='position-relative' style={{marginLeft:"35px",height:"371px",width
        :"285px"}}/>
            <button className='hrt-btn border border-0 position-absolute mt-2'>
                <i className='bi bi-heart '></i>
            </button>
            <div className='mt-3' style={{marginLeft:"10%"}}>
                <span className='text-right ms-2 limelight1'>Blue Flower Print Crop..</span>
                <br></br>  
                <span className=' ms-2 limelight2'>Mellon's Brand</span>
                <button className='pay-btn float-end border border-0'>$29.00</button>
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
    </div>

    {/* women section theory */}
    <div className='mt-5 ms-5'>
        <img src={rectangle} alt='' style={{ marginTop: "-11px" }} />
        <span className='fs-2 ms-3' style={{ fontWeight: "600", color: "#3c4242" }}>Clothing for Women Online in India</span>
    </div>

    <div className='online-theory mt-3' style={{color:"#807d7e",marginLeft:"5.5%",fontSize:"15px"}}>
        <b>Reexplore Women's Clothing Collection Online at Euphoria</b>
        <p className='mt-2'>Women Clothing - Are you searching for the best website to buy Clothing for Women online in India? Well, your search for the coolest and most stylish womens clothing ends here.<br></br> Form trendy Casual womens Wear Online shopping to premium quality cotton women's apparel,<b>Euphoria</b> has closet of Women collection covered with the latest and best design<br></br> of Women's Clothing Online.</p>
        <p>Our collection of clothes for women will make you the trendsetter with an iconic resemblance of choice in Womens Wear.</p>
        <b>One-stop Destination to Shop Every Clothing for Women: Euphoria</b>
        <p className='mt-2'>Today,Clothing for Women is gaining more popularity above all.Ths is because gone are the days when women were used to carrying uncomfertable fashion. Today, a lady looks<br></br> prettier when she is Casual Womens Wear which is a comfertable outfit. Concerning this,<b>Euphoria</b>has a big fat range of Stylish Women's clothing that would make her the winner<br></br> wherever she goes.</p>
        <b>See More</b>
    </div>

    {/* women clothing price */}
    <div className='mt-5 ms-5'>
        <img src={rectangle} alt='' style={{ marginTop: "-11px" }} />
        <span className='fs-2 ms-3' style={{ fontWeight: "600", color: "#3c4242" }}>Buy Women's Clothing at Best Price</span>
    </div>

    <table className='table table-bordered h-auto mt-5' style={{backgroundColor:"#f6f6f6",width:"1200px",marginLeft:"5%"}}>
        <thead className='fs-5'>
            <tr>
                <th>Women's Clothing</th>
                <th className='text-center'>Best Price</th>
            </tr>
        </thead>
        <tbody>
            <tr className=''>
                <td style={{border:"none !important"}}>Pice Any 4-Womens Plain T-Shirt Combo</td>
                <td className='text-center'>$1099</td>
            </tr>
            <tr>
                <td>Pice Any 4-Womens Plain T-Shirt Combo</td>
                <td className='text-center'>$1099</td>
            </tr>
        </tbody>
    </table>
    {/* <hr></hr> */}
</MDBContainer>

</div>
  )
}
