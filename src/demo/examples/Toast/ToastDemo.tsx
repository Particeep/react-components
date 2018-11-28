import * as React from 'react'
import {Page} from '../../../lib/Page/index'
import {Demo} from '../../shared/Demo'
import {ToastDemoExample} from './ToastDemoExample'
import preval from 'babel-plugin-preval/macro'
import {Pre} from '../../shared/Pre/Pre'
import {Code} from '../../shared/Code/Code'

const ToastDemo = () => {
  return (
    <Page>
      <h1>Toast</h1>
      <p>
        Simple wrapper for <Code>{`<Snackbar/>`}</Code> handling the commun types: error, success, warning, info and
        loading.
      </p>

      <h2>Usage</h2>
      <p>
        Add <Code>{`<ToastProvider/>`}</Code> in the root of your application, then simply wrap your component with <Code>withToast</Code> to access the methods
        <Code>toastError</Code>, <Code>toastWarning</Code>, <Code>toastSuccess</Code>, <Code>toastInfo</Code> and <Code>toastLoading</Code>
      </p>
      <Pre raw={
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
        component={ToastDemoExample}/>
    </Page>
  )
}

export default ToastDemo
