import * as React from 'react'
import {ReactNode} from 'react'
import {createStyles, Theme} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((t: Theme) => createStyles({
  root: t.mixins.gutters({
    paddingTop: t.spacing(2),
    paddingBottom: t.spacing(2),
    '&:last-child': {
      paddingBottom: t.spacing(3),
    },
  }) as any,
}))


interface PanelBodyProps {
  children?: ReactNode;
  className?: string;
}


export const PanelBody = ({children, className}: PanelBodyProps) => {
  // @ts-ignore
  const classes = useStyles()
  return (
    <div className={`${classes.root} ${className || ''}`}>
      {children}
    </div>
  )
}
