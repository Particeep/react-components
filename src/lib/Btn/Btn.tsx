import * as React from 'react'
import {Button, CircularProgress, createStyles, Icon, Theme, WithStyles, withStyles} from '@material-ui/core'
import {ButtonProps} from '@material-ui/core/Button/Button'
import classNames from 'classnames'

const styles = (t: Theme) => createStyles({
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  label: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    height: 16,
    lineHeight: '16px',
    fontSize: 22,
    marginRight: t.spacing.unit
  },
  iconAfter: {
    marginRight: 0,
    marginLeft: t.spacing.unit,
  },
  labelHidden: {
    visibility: 'hidden',
  }
})

interface Props extends WithStyles<typeof styles> {
  loading?: boolean
  icon?: string
  iconAfter?: string
}

class Btn extends React.Component<Props & ButtonProps, {}> {

  render() {
    const {loading, classes, children, disabled, icon, iconAfter, ...props} = this.props
    return (
      <Button {...props} disabled={disabled || loading}>
        <div className={classNames(classes.label, loading && classes.labelHidden)}>
          {icon && <Icon className={classes.icon}>{icon}</Icon>}
          {children}
          {iconAfter && <Icon className={classNames(classes.icon, classes.iconAfter)}>{iconAfter}</Icon>}
        </div>
        {loading && <CircularProgress size={24} className={classes.progress}/>}
      </Button>
    )
  }
}

export default withStyles(styles)(Btn)
