import * as React from 'react'
import {Page} from '../../../lib/index'
import {Demo} from '../../shared/Demo'
import preval from 'babel-plugin-preval/macro'
import {AutocompleteDemoMultiple} from './AutocompleteDemoMultiple'
import {AutocompleteDemoSimple} from './AutocompleteDemoSimple'

const AutocompleteDemo = () => {
  return (
    <Page>
      <h1>Autocomplete</h1>
      <h2>Simple Autocomplete</h2>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./AutocompleteDemoSimple.tsx'), 'utf8')`}
        component={AutocompleteDemoSimple}>
      </Demo>
      <h2>Multi-select Autocomplete</h2>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./AutocompleteDemoMultiple.tsx'), 'utf8')`}
        component={AutocompleteDemoMultiple}>
      </Demo>
    </Page>
  )
}

export default AutocompleteDemo
