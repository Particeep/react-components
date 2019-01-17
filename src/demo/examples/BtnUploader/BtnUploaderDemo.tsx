import * as React from 'react'
import {Page} from '../../shared/Page/Page'
import {Demo} from '../../../lib/Demo'
import preval from 'babel-plugin-preval/macro'
import {BtnUploaderDemoButton} from './BtnUploaderDemoButton'
import {Code} from '../../shared/Code/Code'
import {PageTitle} from '../../shared/PageTitle/PageTitle'
import {DocTable} from '../../shared/DocTable/DocTable'

const ChipUploaderDemo = () => {
  return (
    <Page>
      <PageTitle>ChipUploader</PageTitle>
      <p>
        <Code>{`<ChipUploader/>`}</Code> provides a simple way to manage document upload.
        It behaves like <Code>{`<Button/>`}</Code>.
      </p>

      <h2>Demo</h2>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./BtnUploaderDemoButton.tsx'), 'utf8')`}
        component={BtnUploaderDemoButton}>
      </Demo>

      <h2>Api</h2>
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
            <td>document</td>
            <td><Code>{'{'}permalink: string, name: string{'}'}</Code></td>
            <td>Initial uploaded document</td>
          </tr>
          <tr>
            <td>msg</td>
            <td><Code>{'{'}loading: string, upload: string, invalidSize: string{'}'}</Code></td>
            <td>Set of labels used by the component.</td>
          </tr>
          <tr>
            <td>uploading</td>
            <td><Code>boolean</Code></td>
            <td>When <Code>true</Code>, display a spinner</td>
          </tr>
          <tr>
            <td>maxUploadFileSize</td>
            <td><Code>number</Code></td>
            <td>Max upload size in megabytes.</td>
          </tr>
          <tr>
            <td>onDelete</td>
            <td><Code>() => void</Code></td>
            <td>Event emitted when the selected document has been removed.</td>
          </tr>
          <tr>
            <td>onUpload</td>
            <td><Code>(f: File) => void</Code></td>
            <td>Event emitted when a file has been picked.</td>
          </tr>
        </tbody>
      </DocTable>
    </Page>
  )
}

export default ChipUploaderDemo
