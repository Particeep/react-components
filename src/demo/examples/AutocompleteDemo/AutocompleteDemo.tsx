import * as React from 'react'
import {Page} from 'mui-extension'
import {Demo} from '../../shared/Demo'
import preval from 'babel-plugin-preval/macro'
import {AutocompleteDemoMultiple} from './AutocompleteDemoMultiple'
import {AutocompleteDemoSimple} from './AutocompleteDemoSimple'
import {Code} from '../../shared/Code/Code'
import {PageTitle} from '../../shared/PageHeader/PageTitle'

const AutocompleteDemo = () => {
  return (
    <Page>
      <PageTitle>Autocomplete</PageTitle>
      <h2>Simple Autocomplete</h2>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./AutocompleteDemoSimple.tsx'), 'utf8')`}
        component={AutocompleteDemoSimple}/>
      <h2>Multi-select Autocomplete</h2>
      <p>
        It behaves as an <Code>{`<Input/>`}</Code> component. So it can be wrapped in a <Code>{`<FormControl/>`}</Code>
        and <Code>{`<Input/>`}</Code> props, as <Code>multiline</Code>, can be used.
      </p>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./AutocompleteDemoMultiple.tsx'), 'utf8')`}
        component={AutocompleteDemoMultiple}/>
    </Page>
  )
}

export default AutocompleteDemo
