import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// MUI Utils
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

// Configured Store
import ConfigureStore from './store';

// Container
import App from './pages/App';

// Utils
import theme from './utils/theme';

const store = ConfigureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />

      <CssBaseline />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
