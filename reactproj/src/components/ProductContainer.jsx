import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import ctabanner from '../assets/images/cta-banner.jpg'


export default function ProductContainer() {
  const [topRatedProducts, SetTopRatedProducts] = useState([])
  const [isTrpLoading, SetTrpLoading] = useState(true)

  const [featuredProducts, SetFeaturedProducts] = useState([])
  const [isFpLoading, SetFpLoading] = useState(true)

  const [recentProducts, SetRecentProducts] = useState([])
  const [isRpLoading, SetRpLoading] = useState(true)

  const [dealProducts, SetDealProducts] = useState([])
  const [isDpLoading, SetDpLoading] = useState(true)

  const loadTopRatedProducts = async () => {
    const { data } = await axios.get('api/products/top/')
    SetTopRatedProducts(data)
    SetTrpLoading(false)
  }

  const loadFeaturedProducts = async () => {
    const { data } = await axios.get('api/products/featured/')
    SetFeaturedProducts(data)
    SetFpLoading(false)
  }

  const loadRecentProducts = async () => {
    const { data } = await axios.get('api/products/recents/')
    SetRecentProducts(data)
    console.log('data:', typeof (data.images))
    SetRpLoading(false)
  }

  const loadDealProducts = async () => {
    const { data } = await axios.get('api/products/deals/')
    SetDealProducts(data)
    SetDpLoading(false)
  }

  useEffect(() => {
    loadTopRatedProducts()
    loadFeaturedProducts()
    loadRecentProducts()
    loadDealProducts()
  }, [])

  return (
    <div class="product-container">

      <div class="container">

        <div class="product-box">


          {/* Products Recent */}
          <div class="product-main">

            <h2>Recent Products</h2>

            <div class="product-grid">

              {recentProducts.map((product, i) => (
                <div class="showcase">

                  <div class="showcase-banner">

                    <img src={product.thumbnail} alt={product.name} class="product-img default" width="300" />
                    <img src={product.thumbnail} alt={product.name} class="product-img hover" width="300" />

                    <div class="showcase-actions">
                      <button class="btn-action">
                        <ion-icon name="heart-outline" role="img" class="md hydrated" aria-label="heart outline"></ion-icon>
                      </button>

                      <Link to={`/product/${product._id}`} class="btn-action">
                        <ion-icon name="eye-outline" role="img" class="md hydrated" aria-label="eye outline"></ion-icon>
                      </Link>

                      <button class="btn-action">
                        <ion-icon name="repeat-outline" role="img" class="md hydrated" aria-label="repeat outline"></ion-icon>
                      </button>

                      <button class="btn-action">
                        <ion-icon name="bag-add-outline" role="img" class="md hydrated" aria-label="bag add outline"></ion-icon>
                      </button>
                    </div>
                  </div>

                  <div class="showcase-content">
                    <a href="#" class="showcase-category">{product.category}</a>

                    <h3>
                      <a href="#" class="showcase-title">{product.name}</a>
                    </h3>

                    <div class="showcase-rating">
                      <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                      <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                      <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                      <ion-icon name="star-outline" role="img" class="md hydrated" aria-label="star outline"></ion-icon>
                      <ion-icon name="star-outline" role="img" class="md hydrated" aria-label="star outline"></ion-icon>
                    </div>

                    <div class="price-box">
                      <p class="price">${product.price}</p>
                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/*  PRODUCT Right */}

          <div class="product-minimal">

            <div class="product-showcase">

              <h2 class="title">New Arrivals</h2>

              <div class="showcase-wrapper has-scrollbar">

                <div class="showcase-container">
                  {isRpLoading ? <Loader /> :
                    <>
                      {recentProducts.map((product, i) => (
                        <div key={product.id} class="showcase">

                          <Link to="/" class="showcase-img-box">
                            <img src={product.thumbnail} alt={product.name} class="showcase-img"
                              width="70" />
                          </Link>

                          <div class="showcase-content">

                            <h4 class="showcase-title">{product.name}</h4>


                            <Link to="/" class="showcase-category">{product.category}</Link>

                            <div class="price-box">
                              <p class="price">${product.price}</p>
                              <del>$15.00</del>
                            </div>

                          </div>

                        </div>
                      ))}
                    </>
                  }
                </div>

              </div>

            </div>

            <div class="product-showcase">

              <h2 class="title">Featured</h2>

              <div class="showcase-wrapper  has-scrollbar">

                <div class="showcase-container">
                  {isFpLoading ? <Loader /> :
                    <>
                      {featuredProducts.map((product, i) => (
                        <div key={product.id} class="showcase">

                          <Link to="#" class="showcase-img-box">
                            <img src={product.thumbnail} alt={product.name} class="showcase-img"
                              width="70" />
                          </Link>

                          <div class="showcase-content">

                            <h4 class="showcase-title">{product.name}</h4>


                            <a href="#" class="showcase-category">{product.category}</a>

                            <div class="price-box">
                              <p class="price">${product.price}</p>
                              <del>$15.00</del>
                            </div>

                          </div>

                        </div>
                      ))}
                    </>
                  }


                </div>

              </div>

            </div>

            <div class="product-showcase">

              <h2 class="title">Top Rated</h2>

              <div class="showcase-wrapper  has-scrollbar">

                <div class="showcase-container">

                  {isTrpLoading ? <Loader /> :
                    <>
                      {topRatedProducts.map((product, i) => (
                        <div key={product.id} class="showcase">

                          <Link to="#" class="showcase-img-box">
                            <img src={product.thumbnail} alt={product.name} class="showcase-img"
                              width="70" />
                          </Link>

                          <div class="showcase-content">

                            <h4 class="showcase-title">{product.name}</h4>


                            <a href="#" class="showcase-category">{product.category}</a>

                            <div class="price-box">
                              <p class="price">${product.price}</p>
                              <del>$15.00</del>
                            </div>

                          </div>

                        </div>
                      ))}
                    </>
                  }

                </div>

              </div>

            </div>

          </div>



          {/* PRODUCT DEALS */}
          <div class="product-featured">

            <h2 class="title">Deal of the day</h2>

            <div class="showcase-wrapper has-scrollbar">

              {dealProducts.map((product, i) => (
                <div class="showcase-container">

                  <div class="showcase">

                    <div class="showcase-banner">
                      <img src={product.thumbnail} alt={product.name}
                        class="showcase-img" />
                    </div>

                    <div class="showcase-content">

                      <div class="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>

                      <Link to="/">
                        <h3 class="showcase-title">{product.name}</h3>
                      </Link>

                      {product.description && <p class="showcase-desc">
                        Lorem ipsum dolor sit amet consectetur Lorem ipsum
                        dolor dolor sit amet consectetur Lorem ipsum dolor
                      </p>}

                      <div class="price-box">
                        <p class="price">${product.price}</p>

                      </div>

                      <button class="add-cart-btn">add to cart</button>

                      <div class="showcase-status">
                        <div class="wrapper">
                          <p>
                            already sold: <b>20</b>
                          </p>

                          <p>
                            available: <b>40</b>
                          </p>
                        </div>

                        <div class="showcase-status-bar"></div>
                      </div>

                      <div class="countdown-box">

                        <p class="countdown-desc">
                          Hurry Up! Offer ends in:
                        </p>

                        <div class="countdown">

                          <div class="countdown-content">

                            <p class="display-number">360</p>

                            <p class="display-text">Days</p>

                          </div>

                          <div class="countdown-content">
                            <p class="display-number">24</p>
                            <p class="display-text">Hours</p>
                          </div>

                          <div class="countdown-content">
                            <p class="display-number">59</p>
                            <p class="display-text">Min</p>
                          </div>

                          <div class="countdown-content">
                            <p class="display-number">00</p>
                            <p class="display-text">Sec</p>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>
              ))}


            </div>

          </div>



          <div className="container">
            <div className="testimonials-box">

              <div class="cta-container">

                <img src={ctabanner} alt="summer collection" class="cta-banner" />

                <a href="#" class="cta-content">

                  <p class="discount">25% Discount</p>

                  <h2 class="cta-title">Summer collection</h2>

                  <p class="cta-text">Starting @ $10</p>

                  <button class="cta-btn">Shop now</button>

                </a>

              </div>

              <div class="service">

                <h2 class="title">Our Services</h2>

                <div class="service-container">

                  <a href="#" class="service-item">

                    <div class="service-icon">
                      <ion-icon name="boat-outline"></ion-icon>
                    </div>

                    <div class="service-content">

                      <h3 class="service-title">Worldwide Delivery</h3>
                      <p class="service-desc">For Order Over $100</p>

                    </div>

                  </a>

                  <a href="#" class="service-item">

                    <div class="service-icon">
                      <ion-icon name="rocket-outline"></ion-icon>
                    </div>

                    <div class="service-content">

                      <h3 class="service-title">Next Day delivery</h3>
                      <p class="service-desc">UK Orders Only</p>

                    </div>

                  </a>

                  <a href="#" class="service-item">

                    <div class="service-icon">
                      <ion-icon name="call-outline"></ion-icon>
                    </div>

                    <div class="service-content">

                      <h3 class="service-title">Best Online Support</h3>
                      <p class="service-desc">Hours: 8AM - 11PM</p>

                    </div>

                  </a>

                  <a href="#" class="service-item">

                    <div class="service-icon">
                      <ion-icon name="arrow-undo-outline"></ion-icon>
                    </div>

                    <div class="service-content">

                      <h3 class="service-title">Return Policy</h3>
                      <p class="service-desc">Easy & Free Return</p>

                    </div>

                  </a>

                  <a href="#" class="service-item">

                    <div class="service-icon">
                      <ion-icon name="ticket-outline"></ion-icon>
                    </div>

                    <div class="service-content">

                      <h3 class="service-title">30% money back</h3>
                      <p class="service-desc">For Order Over $100</p>

                    </div>

                  </a>

                </div>

              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}