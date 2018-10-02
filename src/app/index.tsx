import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import {ToastProvider} from '../lib/Toast';
import {GlobalProgressProvider} from '../lib/GlobalProgress';

ReactDOM.render(
  <ToastProvider>
    <GlobalProgressProvider>
      <App/>
    </GlobalProgressProvider>
  </ToastProvider>,
  document.getElementById('app-root')
);
