import * as React from 'react'
import {Page as MuiePage} from 'mui-extension'
import {createStyles, Theme, withStyles} from '@material-ui/core'
import classNames from 'classnames'

const styles = (t: Theme) => createStyles({
  root: {
    paddingLeft: t.spacing.unit,
    paddingRight: t.spacing.unit,
  }
})

export const Page = withStyles(styles)(({className, classes, children}: any) => {
  return (
    <MuiePage className={classNames(className, classes.root)}>{children}</MuiePage>
  )
})
