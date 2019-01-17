import * as React from 'react'
import {Page} from '../../shared/Page/Page'
import {Demo} from '../../../lib/Demo'
import {TableSortDemoSimple} from './TableSortDemoSimple'
import preval from 'babel-plugin-preval/macro'
import {Code} from '../../shared/Code/Code'
import {PageTitle} from '../../shared/PageTitle/PageTitle'
import {DocTable} from '../../shared/DocTable/DocTable'
import {OrderByType} from '../../../lib/TableSort/TableSort'

const TableSortDemo = () => {

  return (
    <Page>
      <PageTitle>TableSort</PageTitle>
      <p>
        A convenient wrapper to drastically improve the sort API of the Material-UI
        <Code>{`<Table/>`}</Code> visible
        <a className="link" href="https://material-ui.com/demos/tables/#sorting-amp-selecting">here</a>.
      </p>

      <h2>Demo</h2>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./TableSortDemoSimple.tsx'), 'utf8')`}
        component={TableSortDemoSimple}/>

      <h2>API</h2>
      <DocTable>
        <thead>
        <tr>
          <td>Props</td>
          <td>Type</td>
          <td>Description</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>sortBy</td>
          <td><Code>string</Code></td>
          <td>Name of the initial sorted column</td>
        </tr>
        <tr>
          <td>orderBy</td>
          <td><Code>'asc' | 'desc'</Code></td>
          <td>Initial order by</td>
        </tr>
        <tr>
          <td>onSort</td>
          <td><Code>(sortBy: string, orderBy: 'asc' | 'desc') => void</Code></td>
          <td>Event emitted when sorting by a column.</td>
        </tr>
        </tbody>
      </DocTable>
    </Page>
  )
}

export default TableSortDemo
