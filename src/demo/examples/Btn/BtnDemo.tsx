import * as React from 'react'
import {Page} from '../../../lib/index'
import {Demo} from '../../shared/Demo'
import {BtnDemoButton} from './BtnDemoButton'
import preval from 'babel-plugin-preval/macro'
import {BtnDemoIconButton} from './BtnDemoIconButton'

const BtnDemo = () => {
  return (
    <Page>
      <h1>Btn</h1>
      <p>
        <code>Btn</code> and <code>BtnIcon</code> are wrappers for the respectives <code>Button</code> and
        <code>IconButton</code> components of Material-UI adding the props <code>loading</code>.
      </p>

      <h2>{`<Button/>`} wrapper</h2>
      <p>
        <code>Btn</code> also add <code>icon</code> and <code>iconAfter</code> props so easily insert material icons.
      </p>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./BtnDemoButton.tsx'), 'utf8')`}
        component={BtnDemoButton}>
      </Demo>
      <h2>{`<IconButton/>`} wrapper</h2>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./BtnDemoIconButton.tsx'), 'utf8')`}
        component={BtnDemoIconButton}>
      </Demo>
    </Page>
  )
}

export default BtnDemo
