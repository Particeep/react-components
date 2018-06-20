import * as React from 'react';
import {
  AppBar,
  createStyles,
  Icon,
  IconButton,
  Theme,
  Toolbar,
  Typography,
  withStyles,
  WithStyles
} from '@material-ui/core';
import Menu from './Menu';
import PanelDemo from './Panel/PanelDemo';
import BtnDemo from './Btn/BtnDemo';
import {BrowserRouter, Route} from 'react-router-dom'
import AlertDemo from './Alert/AlertDemo';
import IconsDemo from './Icons/IconsDemo';
import ExpensionStepperDemo from './ExpensionStepper/ExpensionStepperDemo';
import FenderDemo from './Fender/FenderDemo';
import InputDateDemo from './InputDate/InputDateDemo';
import ChipUploaderDemo from './ChipUploader/ChipsUploaderDemo';
import PickDemo from './PickDemo/PickDemo';
import BtnConfirmDemo from './BtnConfirm/BtnConfirmDemo';

const styles = (t: Theme) => createStyles({
  root: {
    overflow: 'hidden',
    position: 'relative',
  },
  body: {
    display: 'flex',
    marginTop: 64
  },
  navIconHide: {
    [t.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: t.palette.background.default,
    padding: t.spacing.unit * 3,
  },
});

interface AppProps extends WithStyles<typeof styles> {

}

class App extends React.Component<AppProps, {}> {

  state = {
    mobileOpen: false,
  };

  render() {
    const {classes} = this.props;
    return (
      <BrowserRouter>
        <div className={classes.root}>
          <AppBar style={{zIndex: 1300}}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <Icon>menu</Icon>
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                React components
              </Typography>
            </Toolbar>
          </AppBar>

          <div className={classes.body}>
            <Menu open={this.state.mobileOpen} toggle={this.handleDrawerToggle}/>
            <main className={classes.content}>
              <Route path="/panel" component={PanelDemo}/>
              <Route path="/btn" component={BtnDemo}/>
              <Route path="/btn-confirm" component={BtnConfirmDemo}/>
              <Route path="/chips-uploader" component={ChipUploaderDemo}/>
              <Route path="/alert" component={AlertDemo}/>
              <Route path="/icons" component={IconsDemo}/>
              <Route path="/stepper" component={ExpensionStepperDemo}/>
              <Route path="/fender" component={FenderDemo}/>
              <Route path="/input-date" component={InputDateDemo}/>
              <Route path="/pick" component={PickDemo}/>
            </main>
          </div>
        </div>
      </BrowserRouter>
    );
  }

  handleDrawerToggle = () => {
    this.setState({mobileOpen: !this.state.mobileOpen});
  };
}

export default withStyles(styles)(App);
