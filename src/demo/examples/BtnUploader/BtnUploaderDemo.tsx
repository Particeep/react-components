import * as React from 'react'
import {Page} from 'mui-extension'
import {Demo} from '../../shared/Demo'
import preval from 'babel-plugin-preval/macro'
import {BtnUploaderDemoButton} from './BtnUploaderDemoButton'
import {Code} from '../../shared/Code/Code'
import {PageTitle} from '../../shared/PageHeader/PageTitle'

class ChipUploaderDemo extends React.Component<any, any> {

  render() {
    return (
      <Page>
        <PageTitle>ChipUploader</PageTitle>
        <p>
          <Code>{`<ChipUploader/>`}</Code> provides a simple way to manage document upload.
          It behaves like <Code>{`<Button/>`}</Code>.
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
