import * as React from 'react'
import {Page} from '../../../lib/index'
import {Demo} from '../../shared/Demo'
import {AnimateDemoSimple} from './AnimateDemoSimple'
import preval from 'babel-plugin-preval/macro'
import {AnimateDemoList} from './AnimateDemoList'
import {Code} from '../../shared/Code/Code'
import {PageTitle} from '../../shared/PageHeader/PageTitle'

const AnimateDemo = () => {
  return (
    <Page>
      <PageTitle>Animate</PageTitle>

      <h2>Animate</h2>
      <Demo
        reloadable
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./AnimateDemoSimple.tsx'), 'utf8')`}
        component={AnimateDemoSimple}/>

      <h2>AnimateList</h2>
      <p>
        There is not intermediate DOM element, <Code>transform</Code> property is directly added to the children.
        Therefore it can be, for example, used in a grid without breaking it.
      </p>
      <Demo
        reloadable
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./AnimateDemoList.tsx'), 'utf8')`}
        component={AnimateDemoList}/>
    </Page>
  )
}

export default AnimateDemo
