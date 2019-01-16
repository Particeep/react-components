import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import {HashRouter} from 'react-router-dom'
import {ThemeContextProvider, useTheme} from './core/theme/ThemeContext'
import {createMuiTheme} from '@material-ui/core'
import MuiThemeProvider from '@material-ui/styles/ThemeProvider'
import {muiTheme} from './core/theme/mui-theme'
import './core/theme/boostrap'


const Root = () => {
  const isDarkTheme = useTheme()
  return (
    <MuiThemeProvider theme={createMuiTheme(muiTheme(isDarkTheme))}>
      <App/>
    </MuiThemeProvider>
  )
}

ReactDOM.render(
  <ThemeContextProvider>
    <HashRouter basename="">
      <Root/>
    </HashRouter>
  </ThemeContextProvider>,
  document.getElementById('app-root')
)


