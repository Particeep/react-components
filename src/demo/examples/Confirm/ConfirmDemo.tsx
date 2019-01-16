import * as React from 'react'
import {Page} from '../../shared/Page/Page'
import preval from 'babel-plugin-preval/macro'
import {Demo} from '../../../lib/Demo'
import {ConfirmDemoButton} from './ConfirmDemoButton'
import {ConfirmDemoMenu} from './ConfirmDemoMenu'
import {Code} from '../../shared/Code/Code'
import {PageTitle} from '../../shared/PageTitle/PageTitle'
import {DocTable} from '../../shared/DocTable/DocTable'
import {ReactNode} from 'react'

const ConfirmDemo = () => {
  return (
    <Page>
      <PageTitle>Confirm</PageTitle>
      <p>
        Wrap a component with <Code>{`<Confirm/>`}</Code> to pop a confirm dialog before to process a given action.
      </p>

      <h2>API</h2>
      <DocTable>
        <thead>
        <tr>
          <td>Props</td>
          <td>Type</td>
          <td>Description</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>disabled</td>
          <td>boolean</td>
        </tr>
        <tr>
          <td>title</td>
          <td>string</td>
        </tr>
        <tr>
          <td>confirmLabel</td>
          <td>string</td>
        </tr>
        <tr>
          <td>cancelLabel</td>
          <td>string</td>
        </tr>
        <tr>
          <td>content</td>
          <td>any</td>
        </tr>
        <tr>
          <td>children</td>
          <td>ReactNode</td>
        </tr>
        <tr>
          <td>onConfirm</td>
          <td>() => void</td>
        </tr>
        </tbody>
      </DocTable>

      <h2>Demo</h2>
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
