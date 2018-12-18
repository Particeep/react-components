import * as React from 'react'
import {Page} from '../../shared/Page/Page'
import {Demo} from '../../../lib/Demo'
import {BtnDemoButton} from './BtnDemoButton'
import preval from 'babel-plugin-preval/macro'
import {BtnDemoIconButton} from './BtnDemoIconButton'
import {Code} from '../../shared/Code/Code'
import {PageTitle} from '../../shared/PageTitle/PageTitle'

const BtnDemo = () => {
  return (
    <Page>
      <PageTitle>Btn</PageTitle>
      <p>
        <Code>Btn</Code> and <Code>BtnIcon</Code> are wrappers for the respectives <Code>Button</Code> and
        <Code>IconButton</Code> components of Material-UI adding the props <Code>loading</Code>.
      </p>

      <h2>{`<Button/>`} wrapper</h2>
      <p>
        <Code>Btn</Code> also add <Code>icon</Code> and <Code>iconAfter</Code> props so easily insert material icons.
      </p>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./BtnDemoButton.tsx'), 'utf8')`}
        component={BtnDemoButton}/>
      <h2>{`<IconButton/>`} wrapper</h2>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./BtnDemoIconButton.tsx'), 'utf8')`}
        component={BtnDemoIconButton}/>
    </Page>
  )
}

export default BtnDemo
