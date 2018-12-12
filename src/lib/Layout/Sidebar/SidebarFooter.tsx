import * as React from 'react'
import {ReactNode} from 'react'
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core'
import classNames from 'classnames'

const styles = (t: Theme) => createStyles({
  root: {
    paddingTop: t.spacing.unit / 2,
    borderTop: '1px solid ' + t.palette.divider,
  },
})

interface IProps extends WithStyles<typeof styles> {
  children?: ReactNode
  className?: string
}

export const SidebarFooter = withStyles(styles)(({children, classes, className}: IProps) => {
  return (
    <footer className={classNames(classes.root, className)}>
      {children}
    </footer>
  )
})
