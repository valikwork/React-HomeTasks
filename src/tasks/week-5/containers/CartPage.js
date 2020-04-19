import React from 'react';
import { useSelector } from 'react-redux';
import ProductItemForCart from '../components/ProductItemForCart';
import { Container, Item, Grid } from 'semantic-ui-react';

function CartPage() {

    const productsInCart = useSelector(state => state.productsInCart);
    const total = useSelector(state => state.total);

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


export default CartPage;