import * as React from 'react'
import {Demo} from '../../../lib/Demo'
import {AlertDemoSimple} from './AlertDemoSimple'
import preval from 'babel-plugin-preval/macro'
import {AlertDemoCustom} from './AlertDemoCustom'
import {AlertDemoWithPanel} from './AlertDemoWithPanel'
import {PageTitle} from '../../shared/PageTitle/PageTitle'
import {Page} from '../../shared/Page/Page'

const AlertDemo = () => {
  return (
    <Page>
      <PageTitle>Alert</PageTitle>

      <h2>Simple alert</h2>
      <p>
        Provide contextual feedback messages for typical user actions with the handful of available and flexible alert
        messages.
      </p>

      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./AlertDemoSimple.tsx'), 'utf8')`}
        component={AlertDemoSimple}>
      </Demo>

      <h2>Customized Alert</h2>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./AlertDemoCustom.tsx'), 'utf8')`}
        component={AlertDemoCustom}>
      </Demo>

      <h2>Alert associated with Panel</h2>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./AlertDemoWithPanel.tsx'), 'utf8')`}
        component={AlertDemoWithPanel}>
      </Demo>
    </Page>
  )
}

export default AlertDemo
