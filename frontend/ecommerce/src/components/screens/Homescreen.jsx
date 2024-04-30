import React from 'react'
import products from '../../Products'
import {Row, Col} from 'react-bootstrap';


function Homescreen() {
  return (
    <div>
        <h1 className='text-centre'>Latest Products</h1>

        <Row>
           {products.map((product) =>(
            <Col sm={12}  md={6} lg={4} xl={3}></Col>
           ))}
        </Row>
    </div>
  )
}

export default Homescreen