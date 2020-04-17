import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import store from './tasks/week-5/redux/store';
import Store from './tasks/week-5/Store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
        <Store />
    </Provider>
  );
}

export default App;
