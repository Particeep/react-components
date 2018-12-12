import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import {HashRouter} from 'react-router-dom'
import {ThemeContextProvider, useTheme} from './core/theme/ThemeContext'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import {muiTheme} from './core/theme/mui-theme'

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


