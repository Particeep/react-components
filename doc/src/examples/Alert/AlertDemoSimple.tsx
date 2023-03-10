import * as React from 'react'
import {Alert} from 'mui-extension'

export const AlertDemoSimple = () => {
  return (
    <>
      <Alert deletable type="warning">A simple <b>warning</b> alert</Alert>
      <Alert deletable type="error">A simple <b>error</b> alert</Alert>
      <Alert deletable type="info">A simple <b>info</b> alert</Alert>
      <Alert deletable type="success">A simple <b>success</b> alert</Alert>
    </>
  )
}
