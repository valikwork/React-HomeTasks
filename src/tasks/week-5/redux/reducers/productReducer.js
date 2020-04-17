import {ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART} from '../actions/productActions';

const initialProducts = {
    products: [
        {
            id: 1,
            title: 'LALA',
            description: 'LALALALLALALALLALA',
            price: 123,
            photo: 'https://mainewellness.org/wp-content/uploads/2017/10/Skywalker-Kush-Live-Plant.jpg',
            quantity: 1
        },
        {
            id: 2,
            title: 'LALA',
            description: 'LALALALLALALALLALA',
            price: 456,
            photo: 'https://www.lamota.org/media/images/full/cannabis-seeds/sumos-og-kush.jpg',
            quantity: 1
        },
        {
            id: 3,
            title: 'LALA',
            description: 'LALALALLALALALLALA',
            price: 678,
            photo: 'https://www.growbarato.net/23424-large_default/og-kush-marijuana-seeds.jpg',
            quantity: 1
        },
        {
            id: 4,
            title: 'LALA',
            description: 'LALALALLALALALLALA',
            price: 197,
            photo: 'https://cannabis-kushfarm.com/wp-content/uploads/2018/05/Buy-Afghan-Cannabis-Kush-Online.jpg',
            quantity: 1
        },
        {
            id: 5,
            title: 'LALA',
            description: 'LALALALLALALALLALA',
            price: 794,
            photo: 'https://www.pacificseedbank.com/wp-content/uploads/2019/01/Platinum-Kush-Autoflowering-Feminized-Marijuana-Seeds..jpg',
            quantity: 1
        },
    ],
    productsInCart: [],
    total: 0
}

function productCartReducer(state = initialProducts, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:{
            
            let productToCart = state.products.find(prod => prod.id === action.payload);
            let existed_item= state.productsInCart.find(prod=> action.payload === prod.id);
            if(existed_item){
                productToCart.quantity += 1
                return {
                    ...state,
                    total: state.total + productToCart.price 
                }
            } else {
                productToCart.quantity = 1;

                let newTotal = state.total + productToCart.price 
                
                return{
                    ...state,
                    productsInCart: [...state.productsInCart, productToCart],
                    total : newTotal
                }
            }
        }
        case DELETE_PRODUCT_FROM_CART:{
            let productToDelete= state.productsInCart.find(prod=> action.payload === prod.id)
            let newProductsInCart = state.productsInCart.filter(prod=> action.payload !== prod.id)
            
            let newTotal = state.total - (productToDelete.price * productToDelete.quantity )

            return{
                ...state,
                productsInCart: newProductsInCart,
                total: newTotal
            }
            
        }
        default: return state;
    }
}

export default productCartReducer;