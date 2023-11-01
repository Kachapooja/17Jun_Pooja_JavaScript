import React from 'react'

export default function ShoppingCart() {
  return (

    <div className='Shopping'>

      {/* cart 1 */}
        <div className="cart1">
          <h1>Women's Item</h1>
          <div className='cart-img'>
            <img src='./assets/images/i1.webp' alt='' className='imgg'></img>
          </div>
          <div className='cart-detail'>
            <p className='text1'>Women's Saree</p>
            <p className='text2'>Rs.<del>4500</del>1000</p>
            <p className='text3'><button className='btn'>Add To Cart</button></p>
          </div>
        </div>

        { /* cart2 */ }

        <div className="cart2">
          <h1>Women's Item</h1>
          <div className='cart-img'>
            <img src='./assets/images/neckles.jpg' alt='' className='imgg'></img>
          </div>
          <div className='cart-detail'>
            <p className='text1'>Women's Neckles</p>
            <p className='text2'>Rs.<del>1500</del>500</p>
            <p className='text3'><button className='btn'>Add To Cart</button></p>
          </div>
        </div>

        {/* cart 3 */}

        <div className="cart3">
          <h1>Women's Item</h1>
          <div className='cart-img'>
            <img src='./assets/images/purse.jpg' alt='' className='imgg'></img>
          </div>
          <div className='cart-detail'>
            <p className='text1'>Women's Purse</p>
            <p className='text2'>Rs.<del>2000</del>1000</p>
            <p className='text3'><button className='btn'>Add To Cart</button></p>
          </div>
        </div>

        {/* cart 4 */}

        <div className="cart4">
          <h1>Women's Item</h1>
          <div className='cart-img'>
            <img src='./assets/images/watch.webp' alt='' className='imgg'></img>
          </div>
          <div className='cart-detail'>
            <p className='text1'>Women's Watch</p>
            <p className='text2'>Rs.<del>4500</del>3000</p>
            <p className='text3'><button className='btn'>Add To Cart</button></p>
          </div>
        </div>
        
      </div>


    
  )
}
