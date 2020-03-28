import React from 'react';
import './App.css';
import Week1 from './tasks/week-1/Week1';
import Week2 from './tasks/week-2/Week2';


import Blog from './tasks/week-3/blog/Blog';
import Glide from './tasks/week-3/glide/Glide'

import ExampleRenderProps from './tasks/week-3/render-props-example/Example';

import ExampleContext from './tasks/week-3/context/Example';
import ExampleUseState from './tasks/week-3/hooks/Example-use-state';
import ExampleUseEffect from './tasks/week-3/hooks/Example-use-effect';

import TodoApp from './tasks/week-4/todoapp-hw/TodoApp';




function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
