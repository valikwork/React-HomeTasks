import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductFormRow from './ProductFormRow';

export default class ProductRow extends Component {
    state = {
        editMode: false
    }

    constructor(props) {
        super(props);
        this.state = { 
            prevUserId: props.userId
        }
    }


    onEdit = updatedProduct => {
        this.props.onEditProduct(updatedProduct)
        this.setState({ editMode: false });
    }


    render() {
        const { product, onRemoveProduct } = this.props;
        const { editMode } = this.state;
        if (editMode) return <ProductFormRow onSubmit={this.onEdit} product={product} />
        return (
            <tr>
            <td>{product.title}</td>
            <td>{product.type}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>
                <button onClick={() => this.setState({ editMode: true })}>Edit</button>
                <button onClick={() => onRemoveProduct(product.id)}>Remove</button>
            </td>
        </tr>
        )
    }
    
    static propTypes = {
        onRemoveProduct: PropTypes.func.isRequired,
        onEditProduct: PropTypes.func.isRequired,
        product: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            price: PropTypes.string,
            quantity: PropTypes.string,
            type: PropTypes.string
        }).isRequired
    }
}
