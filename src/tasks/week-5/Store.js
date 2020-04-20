import React from 'react';
import { Container, Header, Menu } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, NavLink, Route } from 'react-router-dom';
import CartPage from './containers/CartPage';
import ProductsPage from './containers/ProductsPage';
import HomePage from './containers/HomePage';
import { useSelector } from 'react-redux';
import musik from './components/OST.mp3';


function Store() {
        const productsInCart = useSelector(state => state.productsInCart)
        return (
                <Container>
                    <Router>
                        <Header>
                            <NavLink to='/' activeClassName='active-nav'>Convenience Store</NavLink>
                        </Header>
                        <Menu>
                            <NavLink to='/products' className='item' activeClassName='active-nav'>Products</NavLink>
                            <NavLink to='/cart' className='right item' activeClassName='active-nav'><FontAwesomeIcon icon={faShoppingCart}/>Cart {productsInCart.length}</NavLink>
                        </Menu>
                        <Switch>
                            <Route path='/' exact>
                                <HomePage />
                            </Route>
                            <Route path='/cart' exact>
                                <CartPage />
                            </Route>
                            <Route path='/products' exact>
                                <ProductsPage />
                            </Route>
                        </Switch>
                    </Router>
                    {/* <audio autoPlay >
                        <source src={musik}/>
                    </audio> */}
                </Container>
        )
}

export default Store;