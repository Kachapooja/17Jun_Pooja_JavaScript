import React from 'react';
import { MDBContainer ,MDBRow } from 'mdb-react-ui-kit';
import logo from '../../images/logo.png';
import filter from '../../images/filter.png';
import priceline from '../../images/One.png';
import { Link } from 'react-router-dom';



export default function ProductListPage() {
  return (
<div>
<MDBContainer fluid className='list-page'>

    {/* main header */}
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

    {/* Side Section */}
    <div className='vl'>
        {/* filter tab */}
        <div className=''>
            <span className='ms-4 fs-4' style={{color:"#807d7e"}}>Filter</span>
            <img src={filter} alt='' style={{marginLeft:"11%",marginTop:"-10px"}}/>
        </div>
        <hr style={{width:"276px",marginTop:"5px"}}/>

        {/* filter tab details */}
        <div className=''>
        <MDBRow>
            <div className='col-md-2'>
                <h5 className='ms-4 fs-6'>Tops</h5>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1'>
            <div className='col-md-2'>
                <h5 className='ms-4 fs-6'>Printed T-Shirts</h5>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1'>
            <div className='col-md-2'>
                <h5 className='ms-4 fs-6'>Plain T-Shirt</h5>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1'>
            <div className='col-md-2'>
                <h5 className='ms-4 fs-6'>Kurti</h5>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1'>
            <div className='col-md-2'>
                <h5 className='ms-4 fs-6'>Boxers</h5>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1'>
            <div className='col-md-2'>
                <h5 className='ms-4 fs-6'>Full Sleeve T-shirts</h5>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1'>
            <div className='col-md-2'>
                <h5 className='ms-4 fs-6'>Joggers</h5>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1'>
            <div className='col-md-2'>
                <h5 className='ms-4 fs-6'>Payjamas</h5>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        <MDBRow className='mt-1'>
            <div className='col-md-2'>
                <h5 className='ms-4 fs-6'>Jeans</h5>
            </div>
            <div className='col-md-1'>
                <i className='bi bi-chevron-right'></i>
            </div>
        </MDBRow>
        </div>
        <hr className='mt-3' style={{width:"276px",marginTop:"5px"}}/>

        {/* price tab */}
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

        {/* colors tab */}
        <div className=''>
            <span className='ms-4 fs-4' style={{color:"#807d7e"}}>Colors</span>
            <i className='bi bi-chevron-up' style={{marginLeft:"11%"}}></i>
        </div>
        <hr className='mt-3' style={{width:"276px",marginTop:"5px"}}/>

        {/* colors tab details */}
        

        {/* <div className='vl1'></div> */}
    </div>
</MDBContainer>

</div>
  )
}
