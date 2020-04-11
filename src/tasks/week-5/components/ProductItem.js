import React from 'react';
import connect from '../hoc/connect';
import {addProduct} from '../redux/actions/productActions';
import store from '../redux/store';
import { Card, Image, Button, Grid } from 'semantic-ui-react';

function ProductItem(props) {
    const {id, title, description, price, photo} = props.product;

    const saveInCart = () => {
        store.dispatch(addProduct(id))
    }


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
                    <Button onClick={saveInCart}>Add To Cart</Button>
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}


export default ProductItem;