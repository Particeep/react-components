import * as React from 'react'
import {Btn} from '../../../lib/Btn/index'
import {ToastProvider, withToast} from '../../../lib/Toast'

export const ToastDemoExample = () => {
  return (
    <ToastProvider>
      <App/>
    </ToastProvider>
  )
}

const App = withToast(({toastError, toastWarning, toastSuccess, toastInfo, toastLoading}) => {
  const popError = () => toastError('Error toast !')

  const popWarning = () => toastWarning('Warning toast !')

  const popSuccess = () => toastSuccess('Success toast !')

  const popInfo = () => toastInfo('Info toast !')

  const popLoading = () => toastLoading('Loading...')

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Btn color="primary" onClick={popLoading}>Toast Loading</Btn>
      <Btn color="primary" onClick={popError}>Toast error</Btn>
      <Btn color="primary" onClick={popWarning}>Toast Warning</Btn>
      <Btn color="primary" onClick={popSuccess}>Toast Success</Btn>
      <Btn color="primary" onClick={popInfo}>Toast Info</Btn>
    </div>
  )
})
