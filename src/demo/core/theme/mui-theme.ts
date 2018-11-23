import {orange, blue, red} from '@material-ui/core/colors'

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

export const muiTheme = (): any => ({
  palette: {
    primary: blue,
    secondary: orange,
    error: red,
    type: 'light'
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    fontWeightMedium: 600,
  },
  overrides: {
    ...Tab,
  },
})
