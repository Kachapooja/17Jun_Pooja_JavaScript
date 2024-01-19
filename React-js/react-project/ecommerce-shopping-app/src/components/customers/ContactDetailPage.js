import React from 'react';
import { MDBContainer ,MDBRow } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png'; 
import rectangle from "../../images/Rectangle 21.png";


export default function ContactDetailPage() {
  return (
<div>
<MDBContainer fluid className='contact-deatil-page'>

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
            <Link to='/contact-detail-page'>
                <button className='border border-0 ms-2 text-white'
                style={{backgroundColor:"#8a33fd"}}>
                    <i className='bi bi-person'></i>
                </button>
            </Link>
            <Link to='/check-out-page'>
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
        <span style={{color:"#3c4242"}}>Personal Info</span>
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
                <span className='ms-2'>My orders</span>
            </div>
            <div className='mt-3' style={{marginLeft:"25%",color:"#807d7e",fontSize:"15px"}}>
                <i className='bi bi-heart'></i>
                <span className='ms-2'>Whishlist</span>
            </div>
            <div className='mt-3' style={{marginLeft:"25%",color:"#807d7e",fontSize:"15px",backgroundColor:"#f6f6f6"}}>
                <i className='bi bi-person'></i>
                <span className='ms-2'>My Info</span>
            </div>
            <div className='mt-3' style={{marginLeft:"25%",color:"#807d7e",fontSize:"15px"}}>
                <i className='bi bi-box-arrow-right'></i>
                <span className='ms-2'>Sign out</span>
            </div>
        </div>
        <div className='col-md-7'></div>
    </MDBRow>
    </section>
</MDBContainer>
</div>
  )
}
