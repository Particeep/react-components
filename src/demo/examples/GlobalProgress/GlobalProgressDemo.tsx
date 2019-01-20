import * as React from 'react'
import {Demo} from '../../../lib/Demo'
import {GlobalProgressDemoManual} from './GlobalProgressDemoManual'
import preval from 'babel-plugin-preval/macro'
import {GlobalProgressDemoRealLife} from './GlobalProgressDemoRealLife'
import {DocTable} from '../../shared/DocTable/DocTable'
import {Code} from '../../shared/Code/Code'
import {PageTitle} from '../../shared/PageTitle/PageTitle'

const GlobalProgressDemo = () => {
  return (
    <div style={{margin: 'auto', maxWidth: 900}}>
      <PageTitle>GlobalProgress</PageTitle>
      <p>
        Provides a convenient API to handle a progress bar GitHub like.
      </p>
      <h2>Usage</h2>
      <p>
        Add <Code>{`<GlobalProgressProvider/>`}</Code> in the root of your application,
        add {`<GlobalProgressBar/>`} somewhere you want to display the progressbar then simply wrap your component
        with <Code>withGlobalProgress</Code> to access the methods belows.
      </p>
      <DocTable>
        <thead>
        <tr>
          <th>Function name</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><Code>progressStart</Code></td>
          <td>Start the progressbar. Takes a <Code>steps</Code> arguments of type number as the number of steps.</td>
        </tr>
        <tr>
          <td><Code>progressStop</Code></td>
          <td>Instantly hide the progressbar.</td>
        </tr>
        <tr>
          <td><Code>progressComplete</Code></td>
          <td>Complete the progressbar then hide it.</td>
        </tr>
        <tr>
          <td><Code>progressNext</Code></td>
          <td>Increase the progressbar the next step. If it is the last step, also hide it.</td>
        </tr>
        <tr>
          <td><Code>promisesWithProgress</Code></td>
          <td>Sugar method allowing to automatically handle progressbar with a list of <Code>Promises</Code>.
          </td>
        </tr>
        </tbody>
      </DocTable>

      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./GlobalProgressDemoManual.tsx'), 'utf8')`}
        component={GlobalProgressDemoManual}/>

      <h2>promisesWithProgress</h2>
      <p>
        This example demonstrates how to use <Code>promisesWithProgress</Code> and how to stylize the progressbar using
        the props <Code>style</Code> and <Code>styleProgress</Code>.
      </p>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./GlobalProgressDemoRealLife.tsx'), 'utf8')`}
        component={GlobalProgressDemoRealLife}/>
    </div>
  )
}

export default GlobalProgressDemo
