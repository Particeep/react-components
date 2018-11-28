import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import {muiTheme} from './core/theme/mui-theme'
import {HashRouter} from 'react-router-dom'

ReactDOM.render(
  <MuiThemeProvider theme={createMuiTheme(muiTheme())}>
    <HashRouter basename="">
      <App/>
    </HashRouter>
  </MuiThemeProvider>,
  document.getElementById('app-root')
)
