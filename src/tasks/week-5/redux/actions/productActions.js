export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART';


export const addProduct = product => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    }
}

export const deleteProduct = productID => {
    return {
        type: DELETE_PRODUCT_FROM_CART,
        payload: productID
    }
}