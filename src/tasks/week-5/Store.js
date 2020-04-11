import React, { Component } from 'react';
import { Container, Header, Menu } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, NavLink, Route } from 'react-router-dom';
import CartPage from './containers/CartPage';
import ProductsPage from './containers/ProductsPage';
import HomePage from './containers/HomePage';
import store from './redux/store';
import musik from './components/OST.mp3';
import ReduxContext from './contexts/reduxContext';


export default class Store extends Component {

    static contextType = ReduxContext;

    state = {
        products: [],
        productsInCart: []
    }

    componentDidMount() {
        this.setState({products: store.getState().products});
        this.unsubscribe = store.subscribe(() => {
            this.setState({productsInCart: store.getState().productsInCart})
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    
    render() {
        
        return (
                <Container>
                    <Router>
                        <Header>
                            <NavLink to='/' activeClassName='active-nav'>Convenience Store</NavLink>
                        </Header>
                        <Menu>
                            <NavLink to='/products' className='item' activeClassName='active-nav'>Products</NavLink>
                            <NavLink to='/cart' className='right item' activeClassName='active-nav'><FontAwesomeIcon icon={faShoppingCart}/>Cart {this.state.productsInCart.length}</NavLink>
                        </Menu>
                        <Switch>
                            <Route path='/' exact>
                                <HomePage />
                            </Route>
                            <Route path='/cart' exact>
                                <CartPage products={this.state.productsInCart} />
                            </Route>
                            <Route path='/products' exact>
                                <ProductsPage products={this.state.products} />
                            </Route>
                        </Switch>
                    </Router>
                    {/* <audio autoPlay >
                        <source src={musik}/>
                    </audio> */}
                </Container>
        )
    }
}

