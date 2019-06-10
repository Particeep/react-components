import * as React from 'react'
import {ReactChild} from 'react'
import {createStyles, Theme, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    fontWeight: t.typography.fontWeightMedium,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: t.palette.text.disabled,
    marginBottom: t.spacing(2),
  }
}));

interface IProps {
  children: ReactChild
}

export const SidebarTitle = ({children}: IProps) => {
  // @ts-ignore
  const classes = useStyles()
  return (
    <Typography variant="caption" noWrap className={classes.root}>{children}</Typography>
  )
}
