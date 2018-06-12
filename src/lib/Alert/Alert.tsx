import * as React from 'react';
import {createStyles, Icon, IconButton, Theme, WithStyles, withStyles} from '@material-ui/core';
import {colorError, colorInfo, colorSuccess, colorWarning} from '../style/color';
import classNames from 'classnames';

const height = 52;

const styles = (t: Theme) => createStyles({
  root: t.mixins.gutters({
    transition: t.transitions.create('all'),
    minHeight: height,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  }),

  i: {
    paddingRight: t.spacing.unit * 2,
    height: height,
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },

  body: {
    flex: 1,
    paddingTop: t.spacing.unit * 2,
    paddingBottom: t.spacing.unit * 2,
  },

  _success: {
    background: '#e1ffe1',
    color: colorSuccess,
  },

  _info: {
    background: '#e1f5fe',
    color: colorInfo,
  },

  _error: {
    background: '#ffdede',
    color: colorError,
  },

  _hidden: {
    height: 0,
    minHeight: 0,
    opacity: 0,
  },

  _warning: {
    background: 'rgba(255, 128, 0, 0.13)',
    color: colorWarning,
  },

  action: {
    textAlign: 'right',
    margin: `${t.spacing.unit} ${t.spacing.unit / 2} ${t.spacing.unit / 2} 0`,
    marginRight: - t.spacing.unit * 2,
  }
});

interface AlertProps extends WithStyles<typeof styles> {
  type: 'info' | 'error' | 'warning' | 'success';
  icon?: string;
  deletable?: boolean;
  action?: any;
  className?: string;
}

class Alert extends React.Component<AlertProps, any> {

  state = {
    isVisible: true,
  };

  render() {
    const {type, children, icon, classes, action, deletable, className} = this.props;
    return (
      <div className={classNames(classes.root, classes['_' + type], className, !this.state.isVisible && classes._hidden)}>
        <Icon className={classes.i}>{icon ? icon : this.getIconFromType()}</Icon>
        <div className={classes.body}>
          {children}
        </div>
        <div className={classes.action}>
          {action}
          {deletable &&
          <IconButton onClick={() => this.setState({isVisible: false})}>
            <Icon>clear</Icon>
          </IconButton>
          }
        </div>
      </div>
    )
  }

  getIconFromType = () => {
    switch (this.props.type) {
      case 'info':
        return 'info';
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
      case 'success':
        return 'check_circle';
      default:
        return 'info';
    }
  }
}

export default withStyles(styles)(Alert);
