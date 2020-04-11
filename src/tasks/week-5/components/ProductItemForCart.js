import React from 'react';
import { deleteProduct } from '../redux/actions/productActions';
import store from '../redux/store';
import { Card, Image, Button, Grid } from 'semantic-ui-react';

function ProductItem(props) {
    const {id, title, description, price, photo} = props.product;

    const deleteFromCart = () => {
        store.dispatch(deleteProduct(id))
    }
    
    console.log(store.getState())
    return (
        <Grid.Column>
            <Card>
                <Image src={photo} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Product {title} number: {id}</Card.Header>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    {price}$
                </Card.Content>
                <Card.Content extra>
                    <Button onClick={deleteFromCart}>Delete</Button>
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}


export default ProductItem;