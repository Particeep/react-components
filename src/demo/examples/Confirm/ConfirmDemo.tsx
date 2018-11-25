import * as React from 'react'
import {Page} from '../../../lib/index'
import preval from 'babel-plugin-preval/macro'
import {Demo} from '../../shared/Demo'
import {ConfirmDemoButton} from './ConfirmDemoButton'
import {ConfirmDemoMenu} from './ConfirmDemoMenu'

const ConfirmDemo = () => {
  return (
    <Page>
      <h1>Confirm</h1>
      <p>
        Wrap a component with <code>{`<Confirm/>`}</code> to pop a confirm dialog before to process a given action.
      </p>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./ConfirmDemoButton.tsx'), 'utf8')`}
        component={ConfirmDemoButton}>
      </Demo>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./ConfirmDemoMenu.tsx'), 'utf8')`}
        component={ConfirmDemoMenu}>
      </Demo>
    </Page>
  )
}

export default ConfirmDemo
