import * as React from 'react'
import {ReactNode} from 'react'
import {LinearProgress} from '@material-ui/core/es/index'
import {Card, createStyles, Theme} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: t.spacing(2),
  },
  loader: {
    marginBottom: -5,
  },
}))

interface PanelProps {
  loading?: boolean;
  children?: ReactNode;
  className?: string;
}

export const Panel = ({className, loading, children}: PanelProps) => {
  // @ts-ignore
  const classes = useStyles()
  return (
    <Card className={`${classes.root} ${className || ''}`}>
      {loading && <LinearProgress className={classes.loader}/>}
      {children}
    </Card>
  )
}
