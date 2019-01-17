import * as React from 'react'
import {Page} from '../../shared/Page/Page'
import {Demo} from '../../../lib/Demo'
import {BtnDemoButton} from './BtnDemoButton'
import preval from 'babel-plugin-preval/macro'
import {BtnDemoIconButton} from './BtnDemoIconButton'
import {Code} from '../../shared/Code/Code'
import {PageTitle} from '../../shared/PageTitle/PageTitle'
import {DocTable} from '../../shared/DocTable/DocTable'

const BtnDemo = () => {
  return (
    <Page>
      <PageTitle>Btn</PageTitle>
      <p>
        <Code>Btn</Code> and <Code>BtnIcon</Code> are wrappers for the respectives <Code>Button</Code> and
        <Code>IconButton</Code> components of Material-UI adding the props <Code>loading</Code>.
      </p>

      <h2>Example</h2>
      <h3>Btn</h3>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./BtnDemoButton.tsx'), 'utf8')`}
        component={BtnDemoButton}/>
      <h3>IconBtn</h3>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./BtnDemoIconButton.tsx'), 'utf8')`}
        component={BtnDemoIconButton}/>
 <h2>Api</h2>
      <h3>Btn</h3>
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
          <td>loading</td>
          <td><Code>boolean</Code></td>
          <td>If <Code>true</Code>, the label will be replaced by a spinner.</td>
        </tr>
        <tr>
          <td>icon</td>
          <td><Code>string</Code></td>
          <td>Material Icon name to display before the label</td>
        </tr>
        <tr>
          <td>iconAfter</td>
          <td><Code>string</Code></td>
          <td>Material Icon name to display after the label</td>
        </tr>
        </tbody>
      </DocTable>

      <h3>IconBtn</h3>
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
          <td>loading</td>
          <td><Code>boolean</Code></td>
          <td>If <Code>true</Code>, the label will be replaced by a spinner.</td>
        </tr>
        </tbody>
      </DocTable>

   </Page>
  )
}

export default BtnDemo
