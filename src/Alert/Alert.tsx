import * as React from 'react'
import {ReactChild, ReactNode, useState} from 'react'
import {createStyles, Icon, IconButton, Theme} from '@material-ui/core'
import {colorError, colorInfo, colorSuccess, colorWarning} from '../style/color'
import classNames from 'classnames'
import {makeStyles} from '@material-ui/styles'

const height = 52

const useStyles = makeStyles((t: Theme) => createStyles({
  root: t.mixins.gutters({
    // transition: t.transitions.create('all'),
    minHeight: height,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  }) as any,
  i: {
    paddingRight: t.spacing(2),
    height: `${height}px !important`,
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  body: {
    flex: 1,
    paddingTop: t.spacing(2),
    paddingBottom: t.spacing(2),
  },
  _success: {
    background: '#e1ffe1',
    color: colorSuccess,
  },
  _info: {
    background: '#e1f5fe',
    color: colorInfo,
  },
  _error: {
    background: '#ffdede',
    color: colorError,
  },
  _hidden: {
    height: 0,
    minHeight: 0,
    opacity: 0,
  },
  _warning: {
    background: 'rgba(255, 128, 0, 0.13)',
    color: colorWarning,
  },
  action: {
    textAlign: 'right',
    margin: `${t.spacing(1)} ${t.spacing(1 / 2)} ${t.spacing(1 / 2)} 0`,
    marginRight: -t.spacing(2),
  }
}))

interface AlertProps {
  type: 'info' | 'error' | 'warning' | 'success';
  icon?: string;
  deletable?: boolean;
  action?: any;
  className?: string;
  children: ReactNode
}

export const Alert = ({type, children, icon, action, deletable, className}: AlertProps) => {
  // @ts-ignore
  const classes = useStyles()
  const [isVisible, setIsVisible] = useState<boolean>(true)

  const getIconFromType = () => {
    switch (type) {
      case 'info':
        return 'info'
      case 'error':
        return 'error'
      case 'warning':
        return 'warning'
      case 'success':
        return 'check_circle'
      default:
        return 'info'
    }
  }

  return (
    <div
      className={classNames(classes.root, classes['_' + type], className, !isVisible && classes._hidden)}>
      <Icon className={classes.i}>{icon ? icon : getIconFromType()}</Icon>
      <div className={classes.body}>
        {children}
      </div>
      <div className={classes.action}>
        {action}
        {deletable &&
        <IconButton onClick={() => setIsVisible(false)}>
          <Icon>clear</Icon>
        </IconButton>
        }
      </div>
    </div>
  )
}
