import React from 'react';
import {Container,Row} from 'react-bootstrap';
import Imgg1 from './red_apple.png';
import Imgg2 from './snacks.png';
import Imgg3 from './vegetables.png';
import Imgg4 from './strawberry.png';
import Imgg5 from './black_plum.png';
import Imgg6 from './custurd_apple.png';
import Imgg7 from './coffee.png';
import Imgg8 from './headphone.png';
import Imgg9 from './cake & milk.png';
import Imgg10 from './organic_kiwi.png';


export default function FooterApp() {
  return (
    <Container fluid>
      <Row>
        <div className='col-md-3'>
          <h2>Featured Categories</h2>
        </div>
        <div className='col-md-7 position-relative mt-2' id='footer-row'>
          <ul className="position-absolute">
              <li>Cake & Milk</li>
              <li>Coffes & Teas</li>
              <li style={{color:"#3bb77e"}}>Pet Foods</li>
              <li>Vegetables</li>
          </ul>
        </div>
        <div className='col-md-2'>
          <div className="ms-5">
            <span className="left-arrow fs-3"  ><i className="bi bi-arrow-left-circle"></i></span>
            <span className="right-arrow fs-3 ms-3" ><i className=" bi bi-arrow-right-circle"></i></span>
          </div>
        </div>
      </Row>

      {/* card-1 */}
      <div className='card card1 position-relative text-center mt-3' style={{backgroundColor:"#feefea"}}>
        <a href=''><img src={Imgg1} alt='' className='positive-absolute' id='crt' />
        <h6 className='mt-2'id='tt' style={{color:"#253d4e"}}>Red Apple</h6>
        <span style={{color:"#7e7e7e"}}>24 items</span></a>
      </div>

      {/* card-2 */}
      <div className='card card2 position-relative text-center mt-3 ms-4' style={{backgroundColor:"#fff3eb"}}>
        <a href=''><img src={Imgg2} alt='' className='positive-absolute' id='crt' />
        <h6 className='mt-2'id='tt' style={{color:"#253d4e"}}>Snacks</h6>
        <span style={{color:"#7e7e7e"}}>24 items</span></a>
      </div>

      {/* card-3 */}
      <div className='card card3 position-relative text-center mt-3 ms-4' style={{backgroundColor:"#fff3ff"}}>
        <a href=''><img src={Imgg3} alt='' className='positive-absolute' id='crt' />
        <h6 className='mt-2'id='tt' style={{color:"#253d4e"}}>Vegetables</h6>
        <span style={{color:"#7e7e7e"}}>24 items</span></a>
      </div>

      {/* card-4 */}
      <div className='card card4 position-relative text-center mt-3 ms-4' style={{backgroundColor:"#f2fce4"}}>
        <a href=''><img src={Imgg4} alt='' className='positive-absolute' id='crt' />
        <h6 className='mt-2'id='tt' style={{color:"#253d4e"}}>Strawberry</h6>
        <span style={{color:"#7e7e7e"}}>24 items</span></a>
      </div>

      {/* card-5 */}
      <div className='card card5 position-relative text-center mt-3 ms-4' style={{backgroundColor:"#feefea"}}>
        <img src={Imgg5} alt='' className='positive-absolute' id='crt' />
        <h6 className='mt-2'id='tt' style={{color:"#253d4e"}}>Black plum</h6>
        <span style={{color:"#7e7e7e"}}>24 items</span>
      </div>

      {/* card-6 */}
      <div className='card card6 position-relative text-center mt-3 ms-4' style={{backgroundColor:"#fffceb"}}>
        <a href=''><img src={Imgg6} alt='' className='positive-absolute' id='crt' />
        <h6 className='mt-2'id='tt' style={{color:"#253d4e"}}>Custard apple</h6>
        <span style={{color:"#7e7e7e"}}>24 items</span></a>
      </div>

      {/* card-7 */}
      <div className='card card7 position-relative text-center mt-3 ms-4' style={{backgroundColor:"#feefea"}}>
        <a href=''><img src={Imgg7} alt='' className='positive-absolute' id='crt' />
        <h6 className='mt-2'id='tt' style={{color:"#253d4e"}}>Coffee & Tea</h6>
        <span style={{color:"#7e7e7e"}}>24 items</span></a>
      </div>

      {/* card-8 */}
      <div className='card card8 position-relative text-center mt-3 ms-4' style={{backgroundColor:"#ecffec"}}>
        <a href=''><img src={Imgg8} alt='' className='positive-absolute' id='crt' />
        <h6 className='mt-2'id='tt' style={{color:"#253d4e"}}>Headphone</h6>
        <span style={{color:"#7e7e7e"}}>24 items</span></a>
      </div>

      {/* card-9 */}
      <div className='card card9 position-relative text-center mt-3 ms-4' style={{backgroundColor:"#f2fce4"}}>
        <a href=''><img src={Imgg9} alt='' className='positive-absolute' id='crt' />
        <h6 className='mt-2' id='tt' style={{color:"#253d4e"}}>Cake & Milk</h6>
        <span style={{color:"#7e7e7e"}}>24 items</span></a>
      </div>

       {/* card-10 */}
       <div className='card card10 position-relative text-center mt-3 ms-4' style={{backgroundColor:"#fffceb"}}>
        <a href=''><img src={Imgg10} alt='' className='positive-absolute' id='crt' />
        <h6 className='mt-2' id='tt' style={{color:"#253d4e"}}>Organic Kiwi</h6>
        <span style={{color:"#7e7e7e"}}>24 items</span></a>
      </div>
      <hr style={{color:"grey"}} />
    </Container>
  )
}
