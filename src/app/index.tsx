import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import {ToastProvider} from '../lib/Toast';

ReactDOM.render(
  <ToastProvider>
    <App/>
  </ToastProvider>,
  document.getElementById('app-root')
);
