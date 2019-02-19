import * as React from 'react'
import {ReactNode} from 'react'
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core'
import classNames from 'classnames'

const styles = (t: Theme) => createStyles({
  root: {
    paddingTop: t.spacing.unit / 2,
    paddingBottom: t.spacing.unit / 2,
    flex: 1,
    overflowY: 'auto',
  },
})

interface IProps extends WithStyles<typeof styles> {
  children?: ReactNode
  className?: string
}

export const SidebarBody = withStyles(styles)(({children, classes, className}: IProps) => {
  return (
    <main className={classNames(classes.root, className)}>
      {children}
    </main>
  )
})
