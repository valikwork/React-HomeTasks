import React from 'react';
import { connect } from 'react-redux';
import { Card, Image, Button, Grid } from 'semantic-ui-react';
import { addProduct } from '../redux/actions/productActions';

function ProductItem({product, addToCart}) {
    const {id, title, description, price, photo} = product;

    const saveInCart = () => {
        addToCart(id);
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


const mapDispatchToProps = dispatch => ({
    addToCart: (product) => dispatch(addProduct(product))  
})
export default connect(null, mapDispatchToProps)(ProductItem);