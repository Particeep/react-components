import * as React from 'react'
import {ReactNode} from 'react'
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core'
import classNames from 'classnames'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((t: Theme) => ({
  root: {
    paddingTop: t.spacing.unit / 2,
    paddingBottom: t.spacing.unit / 2,
    borderTop: '1px solid ' + t.palette.divider,
  },
}))

interface IProps {
  children?: ReactNode
  className?: string
}

export const SidebarFooter = ({children, className}: IProps) => {
  // @ts-ignore
  const classes = useStyles()
  return (
    <footer className={classNames(classes.root, className)}>
      {children}
    </footer>
  )
}
