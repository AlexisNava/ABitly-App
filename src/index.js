import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Configured Store
import ConfigureStore from './store';

// Container
import App from './pages/App';

const store = ConfigureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
