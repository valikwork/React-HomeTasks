import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import store from './redux/store';
import Store from './Store';
import { Provider } from 'react-redux';

export default function StoreApp() {
    return (
        <Provider store={store}>
            <Store />
        </Provider>
    )
}
