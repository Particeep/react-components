import {blue, orange, red} from '@material-ui/core/colors'

const Tab = {
  MuiTabs: {
    root: {
      minHeight: 0,
    }
  },
  MuiTab: {
    root: {
      textTransform: 'none',
      fontWeight: 600,
      minHeight: 40,
      minWidth: '80px !important',
    }
  }
}

export const muiTheme = (isDarkTheme: boolean): any => ({
  palette: {
    primary: blue,
    secondary: orange,
    error: red,
    type: isDarkTheme ? 'dark' : 'light'
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    fontWeightMedium: 600,
    useNextVariants: true,
  },
  overrides: {
    ...Tab,
  },
})
