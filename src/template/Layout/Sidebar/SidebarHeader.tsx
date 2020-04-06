import * as React from 'react'
import {ReactNode} from 'react'
import {createStyles, Theme} from '@material-ui/core'
import classNames from 'classnames'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    paddingTop: t.spacing(1 / 2),
    paddingBottom: t.spacing(1 / 2),
    borderTop: '1px solid ' + t.palette.divider,
    borderBottom: '1px solid ' + t.palette.divider,
  },
}))

export interface SidebarHeaderProps {
  className?: string
  children?: ReactNode
}

export const SidebarHeader = ({className, children}: SidebarHeaderProps) => {
  const classes = useStyles()
  return (
    <header className={classNames(classes.root, className)}>
      {children}
    </header>
  )
}
