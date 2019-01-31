import * as React from 'react'
import {Btn} from 'mui-extension'
import {ToastProvider, withToast} from 'mui-extension'

export const ToastDemoExample = () => {
  return (
    <ToastProvider>
      <App/>
    </ToastProvider>
  )
}

const App = withToast(({toastError, toastWarning, toastSuccess, toastInfo, toastLoading}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Btn color="primary" onClick={() => toastLoading('Loading...')}>Toast Loading</Btn>
      <Btn color="primary" onClick={() => toastError('Error toast !')}>Toast error</Btn>
      <Btn color="primary" onClick={() => toastWarning('Warning toast !')}>Toast Warning</Btn>
      <Btn color="primary" onClick={() => toastSuccess('Success toast !')}>Toast Success</Btn>
      <Btn color="primary" onClick={() => toastInfo('Info toast !')}>Toast Info</Btn>
    </div>
  )
})
