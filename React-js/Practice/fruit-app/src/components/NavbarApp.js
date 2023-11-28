import React from 'react';
import {Container,Row} from 'react-bootstrap';

export default function NavbarApp() {
  return (
    <Container fluid className=''>
    <Row>
    <div className='col-md-2'>
        <select className='border border-0 text-white p-3' style={{backgroundColor:"#3bb77e", borderRadius:"5px"}}>
        <i className='bi bi-grid text-white'></i>
            <option>Browse All categories</option>
        </select>
    </div>
    <div className='col-md-8'>
    <i className="bi bi-fire" style={{color:"#3bb77e"}}></i>
    <span id='select-menu'  >Deals</span>
    <select id='select-menu' style={{color:"#3bb77e"}}>
        <option>Home</option>
    </select>
    <span id='select-menu'>About</span>
    <select id='select-menu'>
        <option>Shop</option>
    </select>
    <select id='select-menu'>
        <option>Vendors</option>
    </select>
    <select id='select-menu'>
        <option>Mega menu</option>
    </select>
    <select id='select-menu'>
        <option>Blog</option>
    </select>
    <select id='select-menu'>
        <option>Pages</option>
    </select>
    <span id='select-menu'>Contact</span>
    </div>

    <div className='col-md-2' id='service'>
        <i className='bi bi-headset fs-3'></i>
        <span style={{color:"#3bb77e",fontSize:"18px"}}>1900 - 888</span>
        <br />
        <span className='ms-4'>24x7 Support Center</span>

    </div>
    </Row>

    <hr style={{color:"grey"}}/>
    </Container>

    
  )
}
