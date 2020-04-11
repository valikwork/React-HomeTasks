import React, { useEffect, useState} from 'react';
import store from '../redux/store';
import ProductItemForCart from '../components/ProductItemForCart';
import { Container, Item, Grid } from 'semantic-ui-react';

export default function CartPage(props) {

    const [addedProducts, setAddedProducts ] = useState([])
    const prodInCart = props.products;
    const AllProducts = store.getState().products;

    const handleCart = () => {
        let final = []
        
        for (let i = 0; i < prodInCart.length; i++) {
            for (let j = 0; j < AllProducts.length; j++) {
                if(prodInCart[i] === AllProducts[j]['id']){
                    final.push(AllProducts[j]);
                }
            }
        }
        setAddedProducts(final)
    }
   
    useEffect(() => {
        handleCart()
    }, [prodInCart])
    
    if(addedProducts.length === 0) return <div>No Products Added to Cart</div>
    return (
        <Container>
            <Item.Group className='users'>
                <Grid columns={4}>
                    {addedProducts.map(product => {
                        return <ProductItemForCart key={product.id} product={product} />
                    })}
                </Grid>
            </Item.Group>
        </Container>
    )
}
