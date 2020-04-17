import React from 'react';
import { connect } from 'react-redux';
import ProductItemForCart from '../components/ProductItemForCart';
import { Container, Item, Grid } from 'semantic-ui-react';

function CartPage({productsInCart, total}) {

    if(productsInCart.length === 0) return <div>No Products Added to Cart</div>
    return (
        <Container>
            <Item.Group className='products'>
                <Grid columns={4}>
                    {productsInCart.map(product => {
                        return <ProductItemForCart key={product.id} product={product} />
                    })}
                </Grid>
            </Item.Group>
            
            <Item.Group className='total'>
                <Item.Header as='h2'>Total Sum: {total} $</Item.Header>
            </Item.Group>

        </Container>
    )
}

const mapStateToProps = state => { 
    return {
        productsInCart: state.productsInCart,
        total: state.total
    }
}


export default connect(mapStateToProps, null)(CartPage);