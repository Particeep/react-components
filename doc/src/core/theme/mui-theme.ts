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

export const muiTheme = (isDark: boolean): any => ({
  palette: {
    primary: blue,
    secondary: orange,
    error: red,
    type: isDark ? 'dark' : 'light'
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    fontWeightMedium: 600,
  },
  text: {
    // primary: '#202124',
    secondary: isDark ? '#d4d8de' : '#5f6368',
  },
  overrides: {
    ...Tab,
  },
})
