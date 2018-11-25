import * as React from 'react'
import {Page} from '../../../lib/index'
import {Demo} from '../../shared/Demo'
import preval from 'babel-plugin-preval/macro'
import {PickDemoSimple} from './PickDemoSimple'

const PickDemo = () => {
  return (
    <Page>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./PickDemoSimple.tsx'), 'utf8')`}
        component={PickDemoSimple}>
      </Demo>
    </Page>
  )
}

export default PickDemo
