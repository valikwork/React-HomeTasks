import React from 'react'
import ProductRow from './ProductRow'
import ProductFormRow from './ProductFormRow'

export default function ProductList({
    products,
    onRemoveProduct,
    onAddProduct
}) {
    return (
        <table className='product-table'>
            <thead>
                <tr>
                    <td>
                        Название
                    </td>
                    <td>
                        Тип
                    </td>
                    <td>
                        Цена
                    </td>
                    <td>
                        Остаток
                    </td>
                    <td>
                    </td>
                </tr>
            </thead>
            <tbody>
                {products.map(product =>
                    <ProductRow
                        onRemoveProduct={onRemoveProduct}
                        key={product.id}
                        product={product}
                    />
                 )}
                <ProductFormRow onSubmit={onAddProduct} />
            </tbody>
        </table>
    )
}
