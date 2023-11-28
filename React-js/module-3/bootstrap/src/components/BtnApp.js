import React from 'react';
import {Container,Button,ButtonGroup,Card,CardBody,CardFooter,CardHeader,Row} from 'react-bootstrap';

export default function BtnApp() {
  return (
    <div>
    
    <Container className='p-5 mt-5'>

    <Button className='btn btn-sm w-25 p-3 btn-primary text-white border border-0'>Add To Cart</Button>

    <ButtonGroup className='p-3 ms-4'>

    <Button className='btn btn-danger text-white'>Left</Button>

    <Button className='btn btn-danger text-white'>Middle</Button>

    <Button className='btn btn-danger text-white'>Right</Button>

    </ButtonGroup>

    <Row>
      <div className='col-md-4 mt-4'>
        <Card>
          <CardHeader className='bg-sucess text-white'>Charge Sheet</CardHeader>
            <CardBody className='p-5'>
              <p>Lorem ipsum</p>
              <p>Rs. 1000</p>
            </CardBody>
            <CardFooter>
              <p>copyright@2023</p>
          </CardFooter>
        </Card>
      </div>

      <div className='col-md-4 mt-4'>
        <Card>
          <CardHeader className='bg-sucess text-white'>Charge Sheet</CardHeader>
            <CardBody className='p-5'>
              <p>Lorem ipsum</p>
              <p>Rs. 1000</p>
            </CardBody>
            <CardFooter>
              <p>copyright@2023</p>
          </CardFooter>
        </Card>
      </div>
      
    </Row>

    </Container>
    </div>
  )
}
