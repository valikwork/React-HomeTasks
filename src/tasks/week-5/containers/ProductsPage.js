import React from 'react';
import ProductItem from '../components/ProductItem';
import { Container, Item, Grid } from 'semantic-ui-react';

export default function ProductsPage(props) {
    const {products} = props;
    
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
