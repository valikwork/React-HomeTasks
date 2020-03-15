import React from 'react'

export default function ProductRow({ product, onRemoveProduct }) {
    return (
        <tr>
            <td>{product.title}</td>
            <td>{product.type}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>
                <button onClick={() => onRemoveProduct(product.id)}>Remove</button>
            </td>
        </tr>
    )
}
