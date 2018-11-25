import * as React from 'react'
import {Page} from '../../../lib/index'
import {Demo} from '../../shared/Demo'
import preval from 'babel-plugin-preval/macro'
import {FenderDemoSimple} from './FenderDemoSimple'

const FenderDemo = () => {
  return (
    <Page>
      <h1>Fender</h1>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./FenderDemoSimple.tsx'), 'utf8')`}
        component={FenderDemoSimple}>
      </Demo>
    </Page>
  )
}

export default FenderDemo

