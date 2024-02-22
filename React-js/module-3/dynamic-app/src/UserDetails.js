import React from 'react';
import { useParams } from 'react-router-dom';

export default function UserDetails() {

    // defined a variables to load a dynamic users information using useparams

    const  {userId} = useParams(); 

  return (
    
    <>
        <h1 className='text-indigo-600 m-12 ms-5 fs-2'>Users{userId}</h1>
    </>
  )
}
