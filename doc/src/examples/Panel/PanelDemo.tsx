import * as React from 'react'
import {Page} from '../../shared/Page/Page'
import {Demo} from '../../../../src/template/Demo/index'
import {PanelDemoSimple} from './PanelDemoSimple'
import preval from 'babel-plugin-preval/macro'
import {PageTitle} from '../../shared/PageTitle/PageTitle'

const PanelDemo = () => {

  return (
    <Page>
      <PageTitle>Panel</PageTitle>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./PanelDemoSimple.tsx'), 'utf8')`}
        component={PanelDemoSimple}/>
    </Page>
  )
}

export default PanelDemo

