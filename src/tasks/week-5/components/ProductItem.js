import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Image, Button, Grid } from 'semantic-ui-react';
import { addProduct } from '../redux/actions/productActions';

function ProductItem({product}) {
    const {id, title, description, price, photo} = product;

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
                    <Button onClick={() => dispatch(addProduct(id))}>Add To Cart</Button>
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default ProductItem;