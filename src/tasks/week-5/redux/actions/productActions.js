export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART';


export const addProduct = productID => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: productID
    }
}

export const deleteProduct = productID => {
    return {
        type: DELETE_PRODUCT_FROM_CART,
        payload: productID
    }
}