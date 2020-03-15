import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ValidatedInput from './ValidatedInput';

const requiredValidator = value => !value ? 'Required!' : '';

export default class ProductFormRow extends Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        product: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            price: PropTypes.string,
            quantity: PropTypes.string,
            type: PropTypes.string
        }).isRequired
    }

    static defaultProps = {
        product: {}
    }

    constructor(props) {
        super(props);
        const { product } = props;
        this.state = {
            title: '',
            type: '',
            price: '',
            quantity: '',
            ...product
        }
    }
    onChangeField = e => {
        const { name , value} = e.target
        this.setState({ [name]: value })
    }
    submitProductForm = () => {
        this.props.onSubmit(this.state);
        this.resetFields();
    }
    resetFields = () => {
        this.setState({
            title: '',
            type: '',
            price: '',
            quantity: '',
        })
    }
    isDisabled() {
        const { title, type, price, quantity } = this.state;
        return requiredValidator(title)
        && requiredValidator(type)
        && requiredValidator(price)
        && requiredValidator(quantity)
    }
    render() {
        const { title, type, price, quantity } = this.state;
        const disabled = this.isDisabled()
        return (
            <tr>
                <td>
                    <ValidatedInput validate={requiredValidator} type="text" name='title' value={title} onChange={this.onChangeField}/>
                </td>
                <td>
                    <ValidatedInput validate={requiredValidator} type="text" name='type' value={type} onChange={this.onChangeField}/>
                </td>
                <td>
                    <ValidatedInput validate={requiredValidator} type="text" name='price' value={price} onChange={this.onChangeField}/>
                </td>
                <td>
                    <ValidatedInput validate={requiredValidator} type="text" name='quantity' value={quantity} onChange={this.onChangeField}/>
                </td>
                <td>
                    <button disabled={disabled} onClick={this.submitProductForm}>Submit</button>
                </td>
            </tr>
        )
    }
}

