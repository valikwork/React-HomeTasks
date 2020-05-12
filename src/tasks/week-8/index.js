import React from 'react';
import { Provider } from 'react-redux';
import SocialApp from './SocialApp';
import store from './configureStore'

export default function App() {
    
    return (
        <Provider store={store}>
            <SocialApp />
        </Provider>
    )
}
