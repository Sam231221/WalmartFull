import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'

import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import {Message} from '../components/Message'

export const HomeScreen = () => {
  const dispatch = useDispatch()

  //select a particular state i.e productList state which is an obj
  const productList =useSelector(state => state.productList)
 
  //Destructure to access some attributes
  const {error, loading, products} = productList

  console.log('p:',products)
  useEffect(()=>{
         dispatch(listProducts())
  }, [dispatch])


  return (
    <div>
        <h1>latest Products</h1>
        <hr />
        {loading ? <Loader />
         : error? <Message variant='danger'>{error}</Message>
         :<Row>
         {products.map(product=>(
             <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
               <Product product={product} />
             </Col>
         ))}
     </Row>
        }

    </div>
  )
}
