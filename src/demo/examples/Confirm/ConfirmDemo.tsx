import * as React from 'react'
import {Page} from '../../shared/Page/Page'
import preval from 'babel-plugin-preval/macro'
import {Demo} from '../../../lib/Demo'
import {ConfirmDemoButton} from './ConfirmDemoButton'
import {ConfirmDemoMenu} from './ConfirmDemoMenu'
import {Code} from '../../shared/Code/Code'
import {PageTitle} from '../../shared/PageTitle/PageTitle'

const ConfirmDemo = () => {
  return (
    <Page>
      <PageTitle>Confirm</PageTitle>
      <p>
        Wrap a component with <Code>{`<Confirm/>`}</Code> to pop a confirm dialog before to process a given action.
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
