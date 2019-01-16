import * as React from 'react'
import {Page as MuiePage} from 'mui-extension'
import {Theme} from '@material-ui/core'
import classNames from 'classnames'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((t: Theme) => ({
  root: {
    paddingLeft: t.spacing.unit,
    paddingRight: t.spacing.unit,
  }
}))

export const Page = ({className, children}: any) => {
  // @ts-ignore
  const classes = useStyles()
  return (
    <MuiePage className={classNames(className, classes.root)}>{children}</MuiePage>
  )
}
