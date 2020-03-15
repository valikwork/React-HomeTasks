import React from 'react'
import PropTypes from 'prop-types'
import ProductRow from './ProductRow'
import ProductFormRow from './ProductFormRow'

export default function ProductList({
    products,
    onRemoveProduct,
    onAddProduct,
    onEditProduct,
    color
}) {
    return (
        <table className='product-table'>
            <thead>
                <tr>
                    <td style={{ color }}>
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
                        onEditProduct={onEditProduct}
                        key={product.id}
                        product={product}
                    />
                 )}
                <ProductFormRow onSubmit={onAddProduct} />
            </tbody>
        </table>
    )
}


ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    onRemoveProduct: PropTypes.func.isRequired,
    onAddProduct: PropTypes.func.isRequired,
    onEditProduct: PropTypes.func.isRequired,
    color: PropTypes.string
}

ProductList.defaultProps = {
    color: 'red'
}