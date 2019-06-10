import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import {HashRouter} from 'react-router-dom'
import {ThemeContextProvider, useTheme} from './core/theme/ThemeContext'
import {ThemeProvider} from '@material-ui/styles'
import {muiTheme} from './core/theme/mui-theme'
// import './core/theme/boostrap'
import {createMuiTheme} from '@material-ui/core'

const Root = () => {
  const isDarkTheme = useTheme()
  // TODO MuiThemeProvider from package core is needed for the lib. Refacto lib using new API.
  const theme = createMuiTheme(muiTheme(isDarkTheme))
  return (
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
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


