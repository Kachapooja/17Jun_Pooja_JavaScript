import React from 'react';
import { Container,Row} from 'react-bootstrap';

export default function HeaderAppOne() {
  return (
    <Container fluid className='bg-light p-3 shadow header-app-one'>
    <Row>
        <div className='col-md-4'>
            <h7>About Us</h7>&nbsp;|&nbsp;
            <h7>My Account</h7>&nbsp;| &nbsp;
            <h7>Whishlist</h7>&nbsp;| &nbsp;
            <h7>Order Tracking</h7>
        </div>

        <div className='col-md-4'>
            <h7 className=''>Get great services up to 50% off <span className='text-primary'>View Details</span></h7>
        </div>

        <div className='col-md-4'>
            <h7>Need help? Call Us <span style={{color:"#3bb77e"}}>+1800 900</span></h7>&nbsp;|&nbsp;
            <select className='' style={{border : '0', backgroundColor : 'transparent'}}>English
                <option>English</option>
            </select>&nbsp;|&nbsp;&nbsp;
            <select style={{border : '0', backgroundColor : 'transparent'}}>USD
                <option>USD</option>
            </select>
        </div>
    </Row>
    <hr style={{color:"grey"}} />
     </Container>
     
    
  )
}
