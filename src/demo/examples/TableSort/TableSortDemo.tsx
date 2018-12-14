import * as React from 'react'
import {Page} from '../../shared/Page/Page'
import {Demo} from '../../shared/Demo'
import {TableSortDemoSimple} from './TableSortDemoSimple'
import preval from 'babel-plugin-preval/macro'
import {Code} from '../../shared/Code/Code'
import {PageTitle} from '../../shared/PageTitle/PageTitle'

const TableSortDemo = () => {

  return (
    <Page>
      <PageTitle>TableSort</PageTitle>
      <p>
        A convenient wrapper to drastically improve the sort API of the Material-UI
        <Code>{`<Table/>`}</Code> visible
        <a className="link" href="https://material-ui.com/demos/tables/#sorting-amp-selecting">here</a>.
      </p>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./TableSortDemoSimple.tsx'), 'utf8')`}
        component={TableSortDemoSimple}/>
    </Page>
  )
}

export default TableSortDemo
