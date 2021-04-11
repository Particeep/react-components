import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import {HashRouter} from 'react-router-dom'
import {ThemeContextProvider, useTheme} from './core/theme/ThemeContext'
import {ThemeProvider} from '@material-ui/styles'
import {muiTheme} from './core/theme/mui-theme'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import reportWebVitals from './reportWebVitals'

const Root = () => {
  const isDarkTheme = useTheme()
  // TODO MuiThemeProvider from package core is needed for the lib. Refacto lib using new API.
  const theme = createMuiTheme(muiTheme(isDarkTheme))
  return (
    <React.StrictMode>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <App/>
        </ThemeProvider>
      </MuiThemeProvider>
    </React.StrictMode>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
