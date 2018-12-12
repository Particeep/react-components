import * as React from 'react'
import {Page} from '../../../lib/index'
import {Demo} from '../../shared/Demo'
import preval from 'babel-plugin-preval/macro'
import {FenderDemoSimple} from './FenderDemoSimple'
import {FenderDemoCustom} from './FenderDemoCustom'
import {FenderDemoLoading} from './FenderDemoLoading'
import {PageTitle} from '../../shared/PageHeader/PageTitle'

const FenderDemo = () => {
  return (
    <Page>
      <PageTitle>Fender</PageTitle>
      <Demo
        reloadable
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./FenderDemoCustom.tsx'), 'utf8')`}
        component={FenderDemoLoading}>
      </Demo>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./FenderDemoSimple.tsx'), 'utf8')`}
        component={FenderDemoSimple}>
      </Demo>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./FenderDemoCustom.tsx'), 'utf8')`}
        component={FenderDemoCustom}>
      </Demo>
    </Page>
  )
}

export default FenderDemo

