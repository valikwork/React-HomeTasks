import React from 'react';
import ProductItem from '../components/ProductItem';
import { Container, Item, Grid } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

function ProductsPage() {
    const products = useSelector(state => state.products)
    return (
        <Container className='productPage'>
            <Item.Group className='users'>
                <Grid columns={4}>
                    {products.map(product => {
                        return <ProductItem key={product.id} product={product} />
                    })}
                </Grid>
            </Item.Group>
        </Container>
    )
}

// const mapStateToProps = state => { 
//     return {
//         products: state.products
//     }
// }

export default ProductsPage;