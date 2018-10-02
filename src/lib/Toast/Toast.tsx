import * as React from 'react';
import {createStyles, Icon, IconButton, Snackbar, Theme, WithStyles, withStyles} from '@material-ui/core';
import {colorInfo, colorSuccess, colorWarning} from '../style/color';

export const Toast = React.createContext({});

const styles = (t: Theme) => createStyles({
  iError: {
    color: t.palette.error.main,
  },
  iSuccess: {
    color: colorSuccess,
  },
  iWarning: {
    color: colorWarning,
  },
  iInfo: {
    color: colorInfo,
  },
  label: {
    marginLeft: t.spacing.unit,
  }
});

type ToastType = 'error' | 'warning' | 'success' | 'info' | undefined;

export interface IToastState {
  type?: ToastType;
  message?: string;
  open: boolean;
}

export interface IToastContext {
  toastError: (m: string) => void;
  toastSuccess: (m: string) => void;
  toastWarning: (m: string) => void;
  toastInfo: (m: string) => void;
}

interface IProps extends WithStyles<typeof styles> {
}

export interface IState extends IToastState,
  IToastContext {}

class ToastProvider extends React.Component<IProps, IState> {

  state = {
    type: undefined,
    message: undefined,
    open: false,
    toastError: this.popError,
    toastSuccess: this.popSuccess,
    toastWarning: this.popWarning,
    toastInfo: this.popInfo,
  };

  render() {
    const {classes} = this.props;
    const {type, open, message} = this.state;
    return (
      <Toast.Provider value={this.state}>
        {this.props.children}
        <Snackbar
          anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
          open={open}
          autoHideDuration={type === 'error' ? 1000000 : 6000}
          onClose={this.close}
          message={
            <div style={{display: 'flex', alignItems: 'center'}}>
              {this.renderIcon(type)}
              <span className={classes.label}>{message}</span>
            </div>
          }
          action={[
            <IconButton onClick={this.close} color="inherit">
              <Icon>close</Icon>
            </IconButton>,
          ]}
        />
      </Toast.Provider>
    );
  }

  private renderIcon(type: ToastType) {
    const {classes} = this.props;
    switch (type!) {
      case 'error':
        return <Icon className={classes.iError}>error</Icon>;
      case 'success':
        return <Icon className={classes.iSuccess}>check_circle</Icon>;
      case 'warning':
        return <Icon className={classes.iWarning}>warning</Icon>;
      case 'info':
        return <Icon className={classes.iInfo}>info</Icon>;
      default:
        return <></>;
    }
  }

  private pop(type: ToastType, message: string) {
    this.setState({open: true, type, message});
  }

  private popError = (message: string) => this.pop('error', message);

  private popSuccess = (message: string) => this.pop('success', message);

  private popWarning = (message: string) => this.pop('warning', message);

  private popInfo = (message: string) => this.pop('info', message);

  private close = () => this.setState({open: false});
}

export default withStyles(styles)(ToastProvider);

export const withToast = (Component: any) => (props: any) => (
  <Toast.Consumer>
    {(other: IToastContext) => <Component {...props} {...other}/>}
  </Toast.Consumer>
);
