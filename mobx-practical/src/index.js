import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'mobx-react';
import BirdStore from './stores/BirdStore';
import TodoStore from './stores/TodoStore';

const Root = (
  <Provider TodoStore={TodoStore}>
    <App />
  </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));
