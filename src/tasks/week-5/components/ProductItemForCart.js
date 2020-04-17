import React from 'react';
import { Card, Image, Button, Grid } from 'semantic-ui-react';
import { deleteProduct } from '../redux/actions/productActions';
import { connect } from 'react-redux';

function ProductItem({product, removeFromCart}) {
    const {id, title, description, price, photo, quantity} = product;

    const deleteFromCart = () => {
        removeFromCart(id);
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
                    {quantity} items
                </Card.Content>
                <Card.Content extra>
                    <Button onClick={deleteFromCart}>Delete</Button>
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(deleteProduct(id))
})

export default connect(null, mapDispatchToProps)(ProductItem);