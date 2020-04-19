import React from 'react';
import { Card, Image, Button, Grid } from 'semantic-ui-react';
import { deleteProduct } from '../redux/actions/productActions';
import { useDispatch } from 'react-redux';

function ProductItem({product}) {
    const {id, title, description, price, photo, quantity} = product;

    const dispatch = useDispatch();
    
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
                    {quantity} items
                </Card.Content>
                <Card.Content extra>
                    <Button onClick={() => dispatch(deleteProduct(id))}>Delete</Button>
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default ProductItem;