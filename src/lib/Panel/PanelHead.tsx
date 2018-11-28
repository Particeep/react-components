import * as React from 'react'
import {ReactNode} from 'react'
import {createStyles, Icon, Theme, withStyles, WithStyles} from '@material-ui/core'

const styles = (t: Theme) => createStyles({
  root: t.mixins.gutters({
    display: 'flex',
    alignItems: 'center',
    color: t.palette.text.secondary,
    background: t.palette.type === 'light' ? t.palette.grey[100] : t.palette.grey[900],
    borderBottom: '1px solid ' + t.palette.divider,
    paddingRight: t.spacing.unit + 'px !important',
    order: -1, // To be positioned before loader,
    height: 48,
  }),
  icon: {
    marginRight: t.spacing.unit * 2,
  },
  content: {
    flex: 1,
  },
})

interface PanelHeadProps extends WithStyles<typeof styles> {
  icon?: string;
  children?: ReactNode;
  action?: any;
  className?: string;
}

class PanelHead extends React.Component<PanelHeadProps, {}> {

  render() {
    const {className, icon, children, action, classes} = this.props
    return (
      <div className={`${classes.root} ${className || ''}`}>
        {icon &&
        <Icon className={classes.icon}>{icon}</Icon>
        }
        <div className={classes.content}>{children}</div>
        <div>
          {action}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PanelHead)
