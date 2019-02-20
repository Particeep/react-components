import * as React from 'react'
import {ReactNode} from 'react'
import {Theme} from '@material-ui/core'
import classNames from 'classnames'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((t: Theme) => ({
  root: {
    paddingTop: t.spacing.unit / 2,
    paddingBottom: t.spacing.unit / 2,
    flex: 1,
    overflowY: 'auto',
  },
}))

interface IProps {
  children?: ReactNode
  className?: string
}

export const SidebarBody = ({children, className}: IProps) => {
  // @ts-ignore
  const classes = useStyles()
  return (
    <main className={classNames(classes.root, className)}>
      {children}
    </main>
  )
}
