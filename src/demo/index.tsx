import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import {HashRouter} from 'react-router-dom'
import {ThemeContextProvider, useTheme} from './core/theme/ThemeContext'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import MuiThemeProviderHook from '@material-ui/styles/ThemeProvider'
import {muiTheme} from './core/theme/mui-theme'
import './core/theme/boostrap'

const Root = () => {
  const isDarkTheme = useTheme()
  // TODO MuiThemeProvider from package core is needed for the lib. Refacto lib using new API.
  const theme = createMuiTheme(muiTheme(isDarkTheme))
  return (
    <MuiThemeProvider theme={theme}>
      <MuiThemeProviderHook theme={theme}>
        <App/>
      </MuiThemeProviderHook>
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


