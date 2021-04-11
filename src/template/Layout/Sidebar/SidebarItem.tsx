import * as React from 'react'
import {HTMLProps, ReactElement, ReactNode} from 'react'
import {createStyles, Icon, Theme} from '@material-ui/core'
import classNames from 'classnames'
import {fade} from '@material-ui/core/styles/colorManipulator'
import {useLayoutContext} from '../LayoutContext'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    transition: t.transitions.create('all'),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'inherit',
    paddingRight: t.spacing(1),
    paddingLeft: t.spacing(2),
    color: t.palette.text.primary,
    minHeight: 32,
    marginTop: t.spacing(1 / 8),
    marginBottom: t.spacing(1 / 8),
    marginRight: t.spacing(1),
    marginLeft: t.spacing(1),
    borderRadius: 42,
  },
  rootLarge: {
    minHeight: 38,
  },
  rootClickable: {
    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(0, 0, 0, .05)',
    },
  },
  rootActive: {
    color: t.palette.primary.main,
    background: fade(t.palette.primary.main, .16),
  },
  i: {
    // color: t.palette.text.secondary,
    textAlign: 'center',
    marginRight: t.spacing(2),
  },
  label: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    fontSize: t.typography.fontSize,
    fontWeight: t.typography.fontWeightMedium,
  },
}))

export interface SidebarItemProps extends HTMLProps<any> {
  icon?: string | ReactNode
  href?: any
  className?: any
  large?: boolean
  active?: boolean
}

export const SidebarItem = ({href, children, icon, className, active, large, ...other}: SidebarItemProps) => {
  const {closeMobileSidebar} = useLayoutContext()
  const classes = useStyles()

  const getClassName = (clickable: boolean = true) => classNames(
    className,
    classes.root,
    active && classes.rootActive,
    clickable && classes.rootClickable,
    large && classes.rootLarge,
  )

  const renderRoot = (element: ReactElement<any>) => {
    return (
      <div {...other as any} className={getClassName(!!other.onClick)}>
        {element}
      </div>
    )
  }

  const renderRootHref = (element: ReactElement<any>, href: any) => {
    return (
      <a {...other as any} href={href} className={getClassName()}>
        {element}
      </a>
    )
  }

  const content = (
    <>
      {icon && ((typeof icon === 'string')
          ? <Icon className={classes.i}>{icon}</Icon>
          : <div className={classNames(classes.i)}>{icon}</div>
      )}
      <span className={classes.label}>{children}</span>
    </>
  )
  const wrapper = href ? renderRootHref(content, href) : renderRoot(content)

  return (
    <div onClick={closeMobileSidebar}>
      {wrapper}
    </div>
  )
}
