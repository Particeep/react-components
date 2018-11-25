import * as React from 'react'
import {Page} from '../../../lib/index'
import {Demo} from '../../shared/Demo'
import preval from 'babel-plugin-preval/macro'
import {PickDemoMultiple} from './PickDemoMultiple'
import {PickDemoSimple} from './PickDemoSimple'

const PickDemo = () => {
  return (
    <Page>
      <h1>Pick</h1>
      <h2>Simple select</h2>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./PickDemoSimple.tsx'), 'utf8')`}
        component={PickDemoSimple}>
      </Demo>
      <h2>Multi select</h2>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./PickDemoMultiple.tsx'), 'utf8')`}
        component={PickDemoMultiple}>
      </Demo>
    </Page>
  )
}

export default PickDemo
