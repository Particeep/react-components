import * as React from 'react'
import {Alert} from '../../../lib/index'

export const AlertDemoSimple = () => {
  return (
    <>
      <Alert type="warning">A simple <b>warning</b> alert</Alert>
      <Alert type="error">A simple <b>error</b> alert</Alert>
      <Alert type="info">A simple <b>info</b> alert</Alert>
      <Alert type="success">A simple <b>success</b> alert</Alert>
    </>
  )
}
