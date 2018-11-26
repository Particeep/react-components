import * as React from 'react'
import {Page} from '../../../lib/Page/index'
import {Demo} from '../../shared/Demo'
import {ToastDemoExample} from './ToastDemoExample'
import preval from 'babel-plugin-preval/macro'
import {Code} from '../../shared/Code/Code'
import {withToast} from '../../../lib/Toast'

const ToastDemo = () => {
  return (
    <Page>
      <h1>Toast</h1>
      <p>
        Simple wrapper for <code>{`<Snackbar/>`}</code> handling the commun types: error, success, warning, info and
        loading.
      </p>

      <h2>Usage</h2>
      <p>
        Add <code>{`<ToastProvider/>`}</code> in the root of your application, then simply wrap your component with <code>withToast</code> to access the methods
        <code>toastError</code>, <code>toastWarning</code>, <code>toastSuccess</code>, <code>toastInfo</code> and <code>toastLoading</code>
      </p>
      <Code raw={
        `import React from 'react'
import {render} from 'react-dom'
import {ToastProvider} from '../lib'
import App from './components/App'
​
render(
  <ToastProvider>
    <App/>
  </ToastProvider>,
  document.getElementById('root')
)`
      }/>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./ToastDemoExample.tsx'), 'utf8')`}
        component={ToastDemoExample}>
      </Demo>
    </Page>
  )
}

export default ToastDemo
