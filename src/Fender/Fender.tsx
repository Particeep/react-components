import * as React from 'react'
import {ReactNode} from 'react'
import {CircularProgress, createStyles, Icon, Theme} from '@material-ui/core'
import classNames from 'classnames'
import {colorError, colorSuccess, colorWarning} from '../core/style/color'
import {makeStyles} from '@material-ui/styles'

type State = 'loading' | 'error' | 'empty' | 'success' | 'warning';

export interface FenderProps {
  children: ReactNode,
  type?: State
  icon?: string
  iconSize?: number
  className?: string
  style?: object
  title?: ReactNode
  description?: ReactNode,
}

const useStyles = (iconSize: number) => makeStyles((t: Theme) => createStyles({
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
  iContainer: {
    height: iconSize + 10,
    marginTop: t.spacing(1),
    lineHeight: 1,
  },
  i: {
    fontSize: `${iconSize}px !important`,
  },
  p: {
    marginTop: t.spacing(1),
  },
  title: {
    fontSize: 24,
  },
  description: {},
}))

export const Fender = ({children, icon, iconSize = 100, type = 'empty', className, style, title, description}: FenderProps) => {

  const classes = usestyles(iconsize)()

  const geticon = () => {
    if (icon) return rendericon(icon)
    switch (type) {
      case 'empty':
        return rendericon('do_not_disturb')
      case 'error':
        return rendericon('error_outline');
      case 'success':
        return rendericon('check_circle_outline');
      case 'warning':
        return rendericon('warning')
      case 'loading':
        return <circularprogress size={iconsize - 10}/>;
    }
  }

  const rendericon = (name: string) => <icon classname={classes.i}>{name}</icon>

  return (
    <div classname={classnames(classes.root, classname)} style={style}>
      <div>
        <div classname={classnames(classes.icontainer, classes[type])}>{geticon()}</div>
        <div classname={classes.p}>
          {title && <div classname={classes.title}>{title}</div>}
          {description && <div classname={classes.description}>{description}</div>}
          {children}
        </div>
      </div>
    </div>
  )
}
