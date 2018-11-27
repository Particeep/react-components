import * as React from 'react'
import {Demo} from '../../shared/Demo'
import {GlobalProgressDemoManual} from './GlobalProgressDemoManual'
import preval from 'babel-plugin-preval/macro'
import {GlobalProgressDemoRealLife} from './GlobalProgressDemoRealLife'

const GlobalProgressDemo = () => {
  return (
    <div style={{margin: 'auto', maxWidth: 900}}>
      <h1>GlobalProgress</h1>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./GlobalProgressDemoManual.tsx'), 'utf8')`}
        component={GlobalProgressDemoManual}/>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./GlobalProgressDemoRealLife.tsx'), 'utf8')`}
        component={GlobalProgressDemoRealLife}/>
    </div>
  )
}

export default GlobalProgressDemo
