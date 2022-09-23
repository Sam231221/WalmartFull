import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchBox from '../SearchBox'
import { logout } from '../../actions/userActions'
import { HeaderSection } from './Header.element'

import logo from '../../assets/images/logo/logo.svg'
import electronicsbanner from '../../assets/images/electronics-banner-1.jpg'
import menbanner from '../../assets/images/mens-banner.jpg'
import womenbanner from '../../assets/images/womens-banner.jpg'
import electronicsbanner2 from '../../assets/images/electronics-banner-2.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loader from '../Loader'


function Header() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const [products, setProducts] = useState([]);
    const [isSLoading, setSLoading] = useState(true)

    const [filteredData, setfilterdata] = useState([]);
    const [isFLoading, setFLoading] = useState(true)
    const [word, setWordData] = useState("");

    const loadAllProducts = async () => {
        const { data } = await axios.get(`/api/products/all/`)
        setProducts(data)
        setSLoading(false)
    }


    const handleOnChange = (e) => {
        const enteredWord = e.target.value;
        console.log(enteredWord)
        setWordData(enteredWord);

        const filterItems = products.filter((item) => {
            return item.name.toLowerCase().includes(enteredWord.toLowerCase());
        });
        console.log(filterItems)
        if (enteredWord === "") {
            setfilterdata([]);
        } else {
            setfilterdata(filterItems);
            console.log('ff:', typeof (filteredData.length))
            setFLoading(false)
        }

    };

    const dispatch = useDispatch()

    const [categories, setCategories] = useState([])

    const loadCategories = async () => {
        const { data } = await axios.get('/api/products/categories/')
        console.log(data)
        setCategories(data)
    }
    useEffect(() => {
        loadAllProducts()
        loadCategories()

    }, [])

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>

            <div className="header-top">

                <div className="container">

                    <ul className="header-social-container">

                        <li>
                            <a href="#" className="social-link">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                        </li>

                    </ul>

                    <div className="header-alert-news">
                        <p>
                            <b>Free Shipping</b>
                            This Week Order Over - $55
                        </p>
                    </div>

                    <div className="header-top-actions">

                        {userInfo && <p className='header-alert-news'>Welcome {userInfo.name} </p>}
                    </div>

                </div>

            </div>

            <div className="header-main">

                <div className="container">

                    <Link to="/" className="header-logo">
                        <img src={logo} alt="Anon's logo" width="120" height="36" />
                    </Link>

                    <div className="header-search-container search-engine">

                        <input
                            type="search"
                            onChange={handleOnChange}
                            name="search" value={word}
                            className="search-field"
                            placeholder="Enter your product name..." />

                        <button className="search-btn">
                            <ion-icon name="search-outline"></ion-icon>
                        </button>


                        {filteredData.length != 0 && word != '' &&
                            <div className="search-results">
                                {isFLoading ? <Loader />
                                    :
                                    <>
                                        {filteredData.map((product, key) => {
                                            return (
                                                <Link className="p-1 dataItem nav-links link-dark" to={`/product/${product._id}`}>
                                                    <div className='d-flex'>
                                                        <img width="30" height="30" src={product.thumbnail} alt={product.name} />
                                                        <p>{product.name} </p>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </>
                                }
                            </div>
                        }
                        {filteredData.length == 0 && word != '' &&
                            <div className="search-results p-4">No Products found.</div>
                        }


                    </div>

                    <div className="header-user-actions">

                        <Link to='/' className="action-btn">
                            <ion-icon name="person-outline"></ion-icon>
                        </Link>

                        <Link to='/likes' className="action-btn">
                            <ion-icon name="heart-outline"></ion-icon>
                            <span className="count">0</span>
                        </Link>

                        <Link to='/cart' className="action-btn">
                            <ion-icon name="bag-handle-outline"></ion-icon>
                            <span className="count"> {cartItems.reduce((acc, item) => (acc + item.quantity), 0)}</span>
                        </Link>

                    </div>

                </div>

            </div>

            <nav className="desktop-navigation-menu">

                <div className="container">

                    <ul className="desktop-menu-category-list">

                        <li className="menu-category">
                            <Link to="/" className="menu-title">Home</Link>
                        </li>

                        <li className="menu-category">
                            <a href="" className="menu-title">Categories</a>

                            <div className="dropdown-panel">

                                {categories.map((category, i) => (
                                    <ul key={category.id} className="dropdown-panel-list">

                                        <li className="menu-title">
                                            <Link to={`/products/?category=${category.slug}/`}>{category.name}</Link>
                                        </li>

                                        {category.genres.map((genre, i) => (
                                            <li className="panel-list-item">
                                                <Link to={`/products/?category=${category.slug}&genre=${genre.slug}/`}>{genre.name}</Link>
                                            </li>
                                        ))}


                                    </ul>
                                ))}


                            </div>
                        </li>

                        <li className="menu-category">
                            <Link to="/cart" className="menu-title">Hot Offers</Link>
                        </li>

                    </ul>

                </div>

            </nav>

            <div className="mobile-bottom-navigation">

                <button className="action-btn" data-mobile-menu-open-btn>
                    <ion-icon name="menu-outline"></ion-icon>
                </button>

                <button className="action-btn">
                    <ion-icon name="bag-handle-outline"></ion-icon>

                    <span className="count">0</span>
                </button>

                <button className="action-btn">
                    <ion-icon name="home-outline"></ion-icon>
                </button>

                <button className="action-btn">
                    <ion-icon name="heart-outline"></ion-icon>

                    <span className="count">0</span>
                </button>

                <button className="action-btn" data-mobile-menu-open-btn>
                    <ion-icon name="grid-outline"></ion-icon>
                </button>

            </div>

            <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu>

                <div className="menu-top">
                    <h2 className="menu-title">Menu</h2>

                    <button className="menu-close-btn" data-mobile-menu-close-btn>
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                </div>

                <ul className="mobile-menu-category-list">

                    <li className="menu-category">
                        <a href="#" className="menu-title">Home</a>
                    </li>

                    <li className="menu-category">

                        <button className="accordion-menu" data-accordion-btn>
                            <p className="menu-title">Men's</p>

                            <div>
                                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                            </div>
                        </button>

                        <ul className="submenu-category-list" data-accordion>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Shirt</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Shorts & Jeans</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Safety Shoes</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Wallet</a>
                            </li>

                        </ul>

                    </li>

                    <li className="menu-category">

                        <button className="accordion-menu" data-accordion-btn>
                            <p className="menu-title">Women's</p>

                            <div>
                                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                            </div>
                        </button>

                        <ul className="submenu-category-list" data-accordion>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Dress & Frock</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Earrings</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Necklace</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Makeup Kit</a>
                            </li>

                        </ul>

                    </li>

                    <li className="menu-category">

                        <button className="accordion-menu" data-accordion-btn>
                            <p className="menu-title">Jewelry</p>

                            <div>
                                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                            </div>
                        </button>

                        <ul className="submenu-category-list" data-accordion>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Earrings</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Couple Rings</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Necklace</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Bracelets</a>
                            </li>

                        </ul>

                    </li>

                    <li className="menu-category">

                        <button className="accordion-menu" data-accordion-btn>
                            <p className="menu-title">Perfume</p>

                            <div>
                                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                            </div>
                        </button>

                        <ul className="submenu-category-list" data-accordion>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Clothes Perfume</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Deodorant</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Flower Fragrance</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Air Freshener</a>
                            </li>

                        </ul>

                    </li>

                    <li className="menu-category">
                        <a href="#" className="menu-title">Blog</a>
                    </li>

                    <li className="menu-category">
                        <a href="#" className="menu-title">Hot Offers</a>
                    </li>

                </ul>

                <div className="menu-bottom">

                    <ul className="menu-category-list">

                        <li className="menu-category">

                            <button className="accordion-menu" data-accordion-btn>
                                <p className="menu-title">Language</p>

                                <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                            </button>

                            <ul className="submenu-category-list" data-accordion>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">English</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Espa&ntilde;ol</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Fren&ccedil;h</a>
                                </li>

                            </ul>

                        </li>

                        <li className="menu-category">
                            <button className="accordion-menu" data-accordion-btn>
                                <p className="menu-title">Currency</p>
                                <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                            </button>

                            <ul className="submenu-category-list" data-accordion>
                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">USD &dollar;</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">EUR &euro;</a>
                                </li>
                            </ul>
                        </li>

                    </ul>

                    <ul className="menu-social-container">

                        <li>
                            <a href="#" className="social-link">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                        </li>

                    </ul>

                </div>

            </nav>

        </header>

    );
}

export default Header;


{/* {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenue'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )} */}
