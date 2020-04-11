import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import store from './tasks/week-5/redux/store';
import Store from './tasks/week-5/Store';
import ReduxContext from './tasks/week-5/contexts/reduxContext';


function App() {
  return (
    <ReduxContext.Provider value={store}>
        <Store />
    </ReduxContext.Provider>
  );
}

export default App;
