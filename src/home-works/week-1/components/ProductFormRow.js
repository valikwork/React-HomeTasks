import React, { Component } from 'react'
import ValidatedInput from './ValidatedInput';

const requiredValidator = value => !value ? 'Required!' : '';

export default class ProductFormRow extends Component {
    staticdefaultProps = {
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
    render() {
        const { title, type, price, quantity } = this.state;
        return (
            <tr>
                <td>
                    <ValidatedInput validate={requiredValidator} type="text" name='title' value={title} onChange={this.onChangeField}/>
                </td>
                <td>
                    <input type="text" name='type' value={type} onChange={this.onChangeField}/>
                </td>
                <td>
                    <input type="text" name='price' value={price} onChange={this.onChangeField}/>
                </td>
                <td>
                    <input type="text" name='quantity' value={quantity} onChange={this.onChangeField}/>
                </td>
                <td>
                    <button onClick={this.submitProductForm}>Submit</button>
                </td>
            </tr>
        )
    }
}

