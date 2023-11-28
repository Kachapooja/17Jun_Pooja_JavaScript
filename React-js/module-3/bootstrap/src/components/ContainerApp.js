import React from 'react';
import { Container } from 'react-bootstrap';

export default function ContainerApp() {
  return (
    <div>

       <Container className='bg-warning p-5 mt-5'>

        <h1 className='text-danger text-center'>Hello!</h1>

        <p className='text-primary text-center'>lorem ipsum</p>

       </Container>

    </div>
  )
}
