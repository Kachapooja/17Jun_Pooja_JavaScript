import React from 'react';
import {Container,Row,Button,Form} from 'react-bootstrap';
import Img1 from '../components/Slider-1.png';
import Img2 from '../components/Slider-2.png';


export default function SliderApp() {
  return (
<Container fluid>
  <Row>
    <div id="carouselExample" className="carousel slide"      data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active col-md-1">
          <img src={Img1} className="d-block w-100" style={{position:"relative"}} alt="..." />

          {/* img-1 content */}
          <div className='content'>
            <h1 className='text1'>Don't miss amazing <br />grocery deals</h1>

            <h3 className='text2'>Sign up for the daily newsletter</h3>

            <Form className='text3 border border-0'>

              <i className='bi bi-send float-start mt-1 '></i>
                <input type="email" placeholder="Your email address..." style={{border : '0', backgroundColor : 'transparent'}} className='ms-2'/>
                          
                <button type='submit' className='btn1'>Subscribe</button>
            </Form>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Img2} className="d-block w-100" alt="..." />

          {/* img-2 content */}
          <div className='content'>
            <h1 className='text1'>Fresh Vegetables <br/> Big discount</h1>

            <h3 className='text2'>Save up to 50% off on yout first order</h3>

            <Form className='text3 border border-0'>

              <i className='bi bi-send float-start mt-1 '></i>
                <input type="email" placeholder="Your email address..." style={{border : '0', backgroundColor : 'transparent'}} className='ms-2'/>
                          
                <button type='submit' className='btn1'>Subscribe</button>
            </Form>
          </div>
        </div>
      </div>
      <Button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </Button>
      <Button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </Button>
    </div>
  </Row>
<hr style={{color:"grey"}} />
</Container>

  )
}
