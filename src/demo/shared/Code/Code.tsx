import * as React from 'react'
import {ReactChild} from 'react'
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core'

const styles = (t: Theme) => createStyles({
  root: {
    background: t.palette.background.default,
    color: t.palette.text.secondary,
    borderRadius: 3,
    padding: '.2em .4em'
  }
})

interface IProps extends WithStyles<typeof styles> {
  children: ReactChild
}

export const Code = withStyles(styles)(({classes, children}: IProps) => {
  return (
    <code className={classes.root}>{children}</code>
  )
})
