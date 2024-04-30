import React from 'react'
import products from '../../Products'
import {Row, Col} from 'react-bootstrap';
import Product from '../Product'

function Homescreen() {
  return (
    <div>
        <h1 className='text-centre'>Latest Products</h1>

        <Row>
           {products.map((product) =>(
            <Col key={product._id} sm={12}  md={6} lg={4} xl={3}>

                 {/* <h3>{product.name}</h3> */}
                 <Product product={product}/>
            </Col>
           ))}
          
        </Row>
    </div>
  )
}

export default Homescreen