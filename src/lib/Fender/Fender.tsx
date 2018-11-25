import * as React from 'react'
import {CircularProgress, createStyles, Icon, Theme, WithStyles, withStyles} from '@material-ui/core'
import classNames from 'classnames'
import {colorError, colorSuccess, colorWarning} from '../style/color'

type State = 'loading' | 'error' | 'empty' | 'success' | 'warning';

const iconSize = 70

const styles = (t: Theme) => createStyles({
  root: {
    transition: t.transitions.create('all'),
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: colorError
  },
  empty: {
    color: t.palette.text.disabled
  },
  warning: {
    color: colorWarning
  },
  success: {
    color: colorSuccess
  },
  i: {
    fontSize: iconSize,
  },
  p: {
    marginTop: t.spacing.unit,
  }
})

interface Props extends WithStyles<typeof styles> {
  type?: State;
  icon?: string;
  className?: string;
}

class Fender extends React.Component<Props, {}> {

  public static defaultProps: Partial<Props> = {
    type: 'empty'
  }

  render() {
    const {type, classes, className} = this.props
    return (
      <div className={classNames(classes.root, className)}>
        <div className={classes[type]}>
          <div>{this.getIcon()}</div>
          <div className={classes.p}>{this.props.children}</div>
        </div>
      </div>
    )
  }

  private getIcon() {
    const {icon, type} = this.props
    if (icon) return this.icon('icon')
    switch (type) {
      case 'empty':
        return this.icon('do_not_disturb')
      case 'error':
        return this.icon('error')
      case 'success':
        return this.icon('check_circle')
      case 'warning':
        return this.icon('warning')
      case 'loading':
        return <CircularProgress size={iconSize}/>
    }
  }

  private icon = (name: string) => <Icon className={this.props.classes.i}>{name}</Icon>
}

export default withStyles(styles)(Fender)
