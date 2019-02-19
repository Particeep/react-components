import * as React from 'react'
import {Theme} from '@material-ui/core'
import classNames from 'classnames'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((t: Theme) => ({
  root: {
    height: 1,
    background: t.palette.divider,
  },
  rootMargin: {
    marginTop: t.spacing.unit,
    marginBottom: t.spacing.unit,
  }
}))

interface IProps {
  className?: any;
  margin?: boolean;
}

export const SidebarHr = ({className, margin}: IProps) => {
  // @ts-ignore
  const classes = useStyles()
  return (
    <div className={classNames(classes.root, className, margin && classes.rootMargin)}/>
  )
}
