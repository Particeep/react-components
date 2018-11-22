import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import {ToastProvider} from '../lib/Toast'
import {GlobalProgressProvider} from '../lib/GlobalProgress'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import {muiTheme} from './core/theme/mui-theme'

ReactDOM.render(
  <MuiThemeProvider theme={createMuiTheme(muiTheme())}>
    <ToastProvider>
      <GlobalProgressProvider>
        <App/>
      </GlobalProgressProvider>
    </ToastProvider>
  </MuiThemeProvider>,
  document.getElementById('app-root')
)
