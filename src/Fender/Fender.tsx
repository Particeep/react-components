import * as React from 'react'
import {ReactNode} from 'react'
import {CircularProgress, createStyles, Icon, Theme} from '@material-ui/core'
import classNames from 'classnames'
import {colorError, colorSuccess, colorWarning} from '../style/color'
import {makeStyles} from '@material-ui/styles'

type State = 'loading' | 'error' | 'empty' | 'success' | 'warning';

const iconSize = 70

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    transition: t.transitions.create('all'),
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: colorError
  },
  empty: {
    color: t.palette.text.disabled
  },
  warning: {
    color: colorWarning
  },
  success: {
    color: colorSuccess
  },
  i: {
    fontSize: `${iconSize}px !important`,
  },
  p: {
    marginTop: t.spacing(1),
  }
}))

export interface FenderProps {
  children: ReactNode,
  type?: State
  icon?: string
  className?: string
  style?: object
}

export const Fender = ({children, icon, type = 'empty', className, style}: FenderProps) => {
  // @ts-ignore
  const classes = useStyles()
  
  const getIcon = () => {
    if (icon) return renderIcon(icon)
    switch (type) {
      case 'empty':
        return renderIcon('do_not_disturb')
      case 'error':
        return renderIcon('error')
      case 'success':
        return renderIcon('check_circle')
      case 'warning':
        return renderIcon('warning')
      case 'loading':
        return <CircularProgress size={iconSize}/>
    }
  }

  const renderIcon = (name: string) => <Icon className={classes.i}>{name}</Icon>

  return (
    <div className={classNames(classes.root, className)} style={style}>
      <div className={classes[type]}>
        <div>{getIcon()}</div>
        <div className={classes.p}>{children}</div>
      </div>
    </div>
  )
}
