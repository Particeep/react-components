import * as React from 'react'
import {Alert, Panel} from '../../../lib/index'
import {Button} from '@material-ui/core'

export const AlertDemoCustom = () => {
  return (
    <Panel>
      <Alert type="error" icon="cloud_off" action={
        <Button>Dismiss</Button>
      }>
        <div style={{fontSize: '1.4em', lineHeight: 1, marginBottom: 8}}>No internet</div>
        Try
        <ul>
          <li>Checking the network cables, modem, and router</li>
          <li>Reconnecting to Wi-Fi</li>
          <li>Running Windows Network Diagnostics</li>
        </ul>
        <div style={{opacity: .5}}>DNS_PROBE_FINISHED_NO_INTERNET</div>
      </Alert>
    </Panel>
  )
}
