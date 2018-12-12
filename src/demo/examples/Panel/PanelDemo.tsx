import * as React from 'react'
import {Page} from 'mui-extension'
import {Demo} from '../../shared/Demo'
import {PanelDemoSimple} from './PanelDemoSimple'
import preval from 'babel-plugin-preval/macro'
import {PageTitle} from '../../shared/PageHeader/PageTitle'

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

