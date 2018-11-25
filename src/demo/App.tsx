import * as React from 'react'
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core'
import PanelDemo from './examples/Panel/PanelDemo'
import BtnDemo from './examples/Btn/BtnDemo'
import AlertDemo from './examples/Alert/AlertDemo'
import IconsDemo from './examples/Icons/IconsDemo'
import ExpensionStepperDemo from './examples/ExpensionStepper/ExpensionStepperDemo'
import FenderDemo from './examples/Fender/FenderDemo'
import InputDateDemo from './examples/InputDate/InputDateDemo'
import ChipUploaderDemo from './examples/BtnUploader/BtnUploaderDemo'
import AutocompleteDemo from './examples/AutocompleteDemo/AutocompleteDemo'
import ConfirmDemo from './examples/Confirm/ConfirmDemo'
import ToastDemo from './examples/Toast/ToastDemo'
import GlobalProgressDemo from './examples/GlobalProgress/GlobalProgressDemo'
import AnimateDemo from './examples/Animate/AnimateDemo'
import TableSortDemo from './examples/TableSort/TableSortDemo'
import Sidebar from './core/component/Sidebar/Sidebar'
import {Route} from 'react-router-dom'

const styles = (t: Theme) => createStyles({
  '@global': {
    body: {
      fontFamily: t.typography.fontFamily,
    },
    code: {
      background: '#f5f2f0',
      borderRadius: 3,
      padding: '.2em .4em'
    },
    ul: {
      marginTop: '.5em'
    },
    h1: t.typography.h4,
    h2: {
      ...t.typography.h6,
      marginBottom: 0,
    },
    p: t.typography.body1,
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
    ':focus': {
      outline: 0,
    },
  },
  root: {
    overflow: 'hidden',
    position: 'relative',
  },
  body: {
    display: 'flex',
  },
  navIconHide: {
    [t.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: t.palette.background.paper,
  },
})

interface AppProps extends WithStyles<typeof styles> {

}

class App extends React.Component<AppProps, {}> {

  state = {
    mobileOpen: false,
  }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <Sidebar/>
        <div className={classes.body}>
          <main className={classes.content}>
            <Route path="/panel" component={PanelDemo}/>
            <Route path="/btn" component={BtnDemo}/>
            <Route path="/btn-confirm" component={ConfirmDemo}/>
            <Route path="/chips-uploader" component={ChipUploaderDemo}/>
            <Route path="/alert" component={AlertDemo}/>
            <Route path="/icons" component={IconsDemo}/>
            <Route path="/stepper" component={ExpensionStepperDemo}/>
            <Route path="/fender" component={FenderDemo}/>
            <Route path="/toast" component={ToastDemo}/>
            <Route path="/global-progress" component={GlobalProgressDemo}/>
            <Route path="/input-date" component={InputDateDemo}/>
            <Route path="/pick" component={AutocompleteDemo}/>
            <Route path="/table-sort" component={TableSortDemo}/>
            <Route path="/animate" component={AnimateDemo}/>
          </main>
        </div>
      </div>
    )
  }

  handleDrawerToggle = () => {
    this.setState({mobileOpen: !this.state.mobileOpen})
  }
}

export default withStyles(styles)(App)
