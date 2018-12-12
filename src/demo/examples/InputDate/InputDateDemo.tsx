import * as React from 'react'
import {Page} from 'mui-extension'
import {Demo} from '../../shared/Demo'
import {InputDateDemoSimple} from './InputDateDemoSimple'
import preval from 'babel-plugin-preval/macro'
import {InputDateDemoCustom} from './InputDateDemoCustom'
import {PageTitle} from '../../shared/PageHeader/PageTitle'

const InputDateDemo = () => {
  return (
    <Page>
      <PageTitle>InputDate</PageTitle>
      <p>

      </p>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./InputDateDemoSimple.tsx'), 'utf8')`}
        component={InputDateDemoSimple}/>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./InputDateDemoCustom.tsx'), 'utf8')`}
        component={InputDateDemoCustom}/>
    </Page>
  )
}

export default InputDateDemo
