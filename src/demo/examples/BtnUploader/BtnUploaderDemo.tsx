import * as React from 'react'
import {Page} from '../../../lib/index'
import {Demo} from '../../shared/Demo'
import preval from 'babel-plugin-preval/macro'
import {BtnUploaderDemoButton} from './BtnUploaderDemoButton'

class ChipUploaderDemo extends React.Component<any, any> {

  render() {
    return (
      <Page>
        <h1>ChipUploader</h1>
        <p>
          <code>{`<ChipUploader/>`}</code> provides a simple way to manage document upload.
          It behaves like <code>{`<Button/>`}</code>.
        </p>
        <Demo
          raw={preval`module.exports = require('fs').readFileSync(require.resolve('./BtnUploaderDemoButton.tsx'), 'utf8')`}
          component={BtnUploaderDemoButton}>
        </Demo>
      </Page>
    )
  }

}

export default ChipUploaderDemo
