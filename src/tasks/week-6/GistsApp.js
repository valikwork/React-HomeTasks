import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import Gists from './Gists';

export default function GistsApp() {
    return (
        <Provider store={store}>
            <Gists />
        </Provider>
    )
}
