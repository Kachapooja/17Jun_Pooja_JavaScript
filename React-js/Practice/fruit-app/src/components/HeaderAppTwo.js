import React from 'react';
import { Container,Navbar,Row,Form,Button } from 'react-bootstrap';
 import logo from '../components/logo.png';

export default function HeaderApp() {
  return (
    <div>
        <Container fluid className='bg-light header-app'>

            <Row>
              <div className='col-md-2'>
                <img src={logo} width="150" height="50"
                className="d-block" alt=''/>
              </div>

              <div className='col-md-6 border border-1 border-success rounded'>
                <select style={{border : '0', backgroundColor : 'transparent'}} className='mt-2'>
                  <option>All Categories</option> 
                </select> |
                <input type="text" placeholder="Search for..." style={{border : '0', backgroundColor : 'transparent'}}/>
                <i className='bi bi-search float-end mt-2'></i>
              </div>

              <div className='col-md-4' bg-danger>
                <select className='border rounded border-dark mt-2'>Your Location
                  <option>Your Location</option>
                  <option>150 feet road</option>
                  <option>Nana mauva road</option>
                  <option>Raiya road</option>
                </select>

                <span className='bi bi-heart start-100 top-0 fs-4 translate-middle ms-2'><span className=" badge p-1 border border-light rounded-circle translate-middle" style={{backgroundColor:"#3bb77e"}}>6</span><span style={{fontSize:"16px",marginLeft:"-12px"}}>Wishlist</span></span>

                <span className='bi bi-cart start-100 top-0 fs-4 translate-middle ms-2'><span className=" badge p-1 border border-light rounded-circle translate-middle" style={{backgroundColor:"#3bb77e"}} >2</span><span style={{fontSize:"16px",marginLeft:"-12px"}}>Cart</span></span>

                <span className='bi bi-person start-100 top-0 fs-4 translate-middle ms-2'><span style={{fontSize:"16px"}}>Account</span></span>
                   
              </div>
            </Row>
          <hr style={{color:"grey"}}/>
        </Container>
    </div>
  )
}
