import React from 'react'

export default function Calculator() {
  return (

    <div className='calc'>
        <input type='text' placeholder='0' style={{width:"97%" ,height:"30px" ,marginBottom:"10px"}}></input>

        <button type='button' className='btn'>%</button>
        <button type='button' className='btn'>CE</button>
        <button type='button' className='btn'>C</button>
        <button type='button' className='btn'>/</button>
        

        <button type='button' className='btn'>7</button>
        <button type='button' className='btn'>8</button>
        <button type='button' className='btn'>9</button>
        <button type='button' className='btn'>x</button>


        <button type='button' className='btn'>4</button>
        <button type='button' className='btn'>5</button>
        <button type='button' className='btn'>6</button>
        <button type='button' className='btn'>-</button>

        <button type='button' className='btn'>1</button>
        <button type='button' className='btn'>2</button>
        <button type='button' className='btn'>3</button>
        <button type='button' className='btn'>+</button>

        <button type='button' className='btn'>0</button>
        <button type='button' className='btn'>00</button>
        <button type='button' className='btn'>.</button>
        <button type='button' className='btn'>=</button>
    </div>
  )
}
