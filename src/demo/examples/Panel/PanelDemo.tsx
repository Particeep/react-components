import * as React from 'react'
import {Page} from '../../../lib/index'
import {Demo} from '../../shared/Demo'
import {PanelDemoSimple} from './PanelDemoSimple'
import preval from 'babel-plugin-preval/macro'

const PanelDemo = () => {

  return (
    <Page>
      <h1>Panel</h1>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./PanelDemoSimple.tsx'), 'utf8')`}
        component={PanelDemoSimple}/>
    </Page>
  )
}

export default PanelDemo

