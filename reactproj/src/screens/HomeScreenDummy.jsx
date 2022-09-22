import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'

import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import {Message} from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'

export const HomeScreenDummy = () => {

  const dispatch = useDispatch()

  //select a particular state i.e productList state which is an obj
  const productList =useSelector(state => state.productList)


  //Destructure to access some attributes
  const {error, loading,page, pages ,products} = productList
  console.log('p:',products)

  const keyword = window.location.search
  //let keyword = history.location.search  <- Only this works,  needs to be done something.

  console.log('kweyword:',keyword)

  useEffect(()=>{
    console.log('hello')
         dispatch(listProducts(keyword))
  }, [dispatch, keyword])


  return (
    <div>
        {!keyword && <ProductCarousel />}
        <br />
        <h1>latest Products</h1>
        <hr />
        {
         loading ? <Loader />
         : error? <Message variant='danger'>{error}</Message>
         :
         <div>
                <Row>
              {products.map(product=>(
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
              ))}
              </Row>
                <Paginate page={page} pages={pages} keyword={keyword} />
          </div>
        }
    </div>
  )
}
