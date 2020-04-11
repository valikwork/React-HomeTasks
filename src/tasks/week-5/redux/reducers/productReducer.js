import {ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART} from '../actions/productActions';
import { combineReducers } from 'redux';

const initialProducts = [
    {
        id: 1,
        title: 'LALA',
        description: 'LALALALLALALALLALA',
        price: 123,
        photo: 'https://mainewellness.org/wp-content/uploads/2017/10/Skywalker-Kush-Live-Plant.jpg'
    },
    {
        id: 2,
        title: 'LALA',
        description: 'LALALALLALALALLALA',
        price: 456,
        photo: 'https://www.lamota.org/media/images/full/cannabis-seeds/sumos-og-kush.jpg'
    },
    {
        id: 3,
        title: 'LALA',
        description: 'LALALALLALALALLALA',
        price: 678,
        photo: 'https://www.growbarato.net/23424-large_default/og-kush-marijuana-seeds.jpg'
    },
    {
        id: 4,
        title: 'LALA',
        description: 'LALALALLALALALLALA',
        price: 197,
        photo: 'https://cannabis-kushfarm.com/wp-content/uploads/2018/05/Buy-Afghan-Cannabis-Kush-Online.jpg'
    },
    {
        id: 5,
        title: 'LALA',
        description: 'LALALALLALALALLALA',
        price: 794,
        photo: 'https://www.pacificseedbank.com/wp-content/uploads/2019/01/Platinum-Kush-Autoflowering-Feminized-Marijuana-Seeds..jpg'
    },
]

function productCartReducer(state = [], action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:{
            return [ ...state, action.payload ];
        }
        case DELETE_PRODUCT_FROM_CART:{
            return state.filter(id => id !== action.payload)
        }
        default: return state;
    }
}

function productReducer(state = initialProducts) {
    return state
}

const appReducer = combineReducers({
    products: productReducer,
    productsInCart: productCartReducer
});

export default appReducer;