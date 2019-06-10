import * as React from 'react'
import {Page as MuiePage} from 'mui-extension'
import {createStyles, Theme} from '@material-ui/core'
import classNames from 'classnames'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    paddingLeft: t.spacing(1),
    paddingRight: t.spacing(1),
    minWidth: 0,
    marginBottom: t.spacing(2),
  }
}))

export const Page = ({className, children}: any) => {
  // @ts-ignore
  const classes = useStyles()
  return (
    <MuiePage className={classNames(className, classes.root)}>{children}</MuiePage>
  )
}
