import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartAction'
import PageContainer from '../components/PageContainer'


function ShippingScreen() {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()
    const navigate = useNavigate()

    /*
    Either we load the shipping address for user(user have alread defined) or make it empty
    */
    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        navigate('/payment')
    }

    return (
        <PageContainer>
            <div className="container">
                <FormContainer>
                    <div className='form-signin w-100 m-auto'>
                        {/*
             On Shipping Screen
             there are only 2 steps
             step1: User must be logged in
             step2: User Shipping Address 
            */}
                        <h3 className='text-center'> Checkout Process</h3>
                        <CheckoutSteps step1 step2 />
                        <h5>Shipping</h5>
                        <Form onSubmit={submitHandler}>

                            <Form.Group controlId='address'>
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Enter address'
                                    value={address ? address : ''}
                                    onChange={(e) => setAddress(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='city'>
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Enter city'
                                    value={city ? city : ''}
                                    onChange={(e) => setCity(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='postalCode'>
                                <Form.Label>Postal Code</Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Enter postal code'
                                    value={postalCode ? postalCode : ''}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='country'>
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Enter country'
                                    value={country ? country : ''}
                                    onChange={(e) => setCountry(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Button type='submit' variant='primary'>
                                Continue
                            </Button>
                        </Form>
                    </div>
                </FormContainer>
            </div>
        </PageContainer>
    )
}

export default ShippingScreen
