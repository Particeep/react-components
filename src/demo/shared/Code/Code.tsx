import * as React from 'react'
import {ReactNode} from 'react'
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core'

const styles = (t: Theme) => createStyles({
  root: {
    background: t.palette.background.default,
    color: t.palette.text.secondary,
    borderRadius: 3,
    padding: '.2em .4em',
  }
})

interface IProps extends WithStyles<typeof styles> {
  children: ReactNode
}

export const Code = withStyles(styles)(({classes, children}: IProps) => {
  return (
    <>
      {' '/*https://github.com/facebook/react/issues/1643*/}
      <code className={classes.root}>{children}</code>
      {' '}
    </>
  )
})
