import * as React from 'react'
import {
  CircularProgress,
  createStyles,
  Icon,
  IconButton,
  Snackbar,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core'
import {colorInfo, colorSuccess, colorWarning} from '../core/style/color'
import autobind from 'autobind-decorator'
import {useContext} from 'react'

const ToastContext = React.createContext({})

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
    marginLeft: t.spacing(2),
  }
})

type ToastType = 'error' | 'loading' | 'warning' | 'success' | 'info' | undefined;

export interface ToastState {
  type?: ToastType;
  message?: string;
  open: boolean;
}

export interface WithToast {
  toastError: (m: string) => void;
  toastSuccess: (m: string) => void;
  toastWarning: (m: string) => void;
  toastInfo: (m: string) => void;
  toastLoading: (m: string) => void;
}

export interface ToastProviderProps {
}

export interface IState extends ToastState,
  WithToast {
}

class ToastProvider extends React.Component<ToastProviderProps & WithStyles<typeof styles>, IState> {

  state = {
    type: undefined,
    message: undefined,
    open: false,
    toastError: this.popError,
    toastSuccess: this.popSuccess,
    toastWarning: this.popWarning,
    toastInfo: this.popInfo,
    toastLoading: this.popLoading,
  }

  render() {
    const {classes} = this.props
    const {type, open, message} = this.state
    return (
      <ToastContext.Provider value={this.state}>
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
          action={
            <IconButton onClick={this.close} color="inherit">
              <Icon>close</Icon>
            </IconButton>
          }
        />
      </ToastContext.Provider>
    )
  }

  private renderIcon(type: ToastType) {
    const {classes} = this.props
    switch (type!) {
      case 'error':
        return <Icon className={classes.iError}>error</Icon>
      case 'success':
        return <Icon className={classes.iSuccess}>check_circle</Icon>
      case 'warning':
        return <Icon className={classes.iWarning}>warning</Icon>
      case 'info':
        return <Icon className={classes.iInfo}>info</Icon>
      case 'loading':
        return <CircularProgress size={24} thickness={5}/>
      default:
        return <></>
    }
  }

  private pop(type: ToastType, message: string) {
    this.setState({open: true, type, message})
  }

  @autobind
  private popError(message: string) {
    this.pop('error', message)
  };

  @autobind
  private popSuccess(message: string) {
    this.pop('success', message)
  }

  @autobind
  private popWarning(message: string) {
    this.pop('warning', message)
  }

  @autobind
  private popInfo(message: string) {
    this.pop('info', message)
  }

  @autobind
  private popLoading(message: string) {
    this.pop('loading', message)
  }

  @autobind
  private close() {
    this.setState({open: false})
  }
}

export const useToast = (): WithToast => {
  const {
    toastError,
    toastSuccess,
    toastWarning,
    toastInfo,
    toastLoading,
  } = useContext(ToastContext) as WithToast
  return {
    toastError,
    toastSuccess,
    toastWarning,
    toastInfo,
    toastLoading,
  }
}


export default withStyles(styles)(ToastProvider) as React.ComponentType<ToastProviderProps>

export const withToast = (Component: any) => (props: any) => (
  <ToastContext.Consumer>
    {(other: any /*WithToast*/) => <Component {...props} {...other}/>}
  </ToastContext.Consumer>
)
