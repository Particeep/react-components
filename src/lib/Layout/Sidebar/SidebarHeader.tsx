import * as React from 'react'
import {ReactNode} from 'react'
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core'
import classNames from 'classnames'

const styles = (t: Theme) => createStyles({
  root: {
    paddingTop: t.spacing.unit / 2,
    paddingBottom: t.spacing.unit / 2,
    borderTop: '1px solid ' + t.palette.divider,
    borderBottom: '1px solid ' + t.palette.divider,
  },
})

interface IProps extends WithStyles<typeof styles> {
  className?: string
  children?: ReactNode
}

export const SidebarHeader = withStyles(styles)(({classes, className, children}: IProps) => {
  return (
    <header className={classNames(classes.root, className)}>
      {children}
    </header>
  )
})
