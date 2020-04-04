import * as React from 'react'
import {HTMLProps, ReactElement, ReactNode} from 'react'
import {createStyles, Icon, Theme} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
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
  to?: any
  href?: any
  className?: any
  large?: boolean
}

export const SidebarItem = ({href, to, children, icon, className, large, ...other}: SidebarItemProps) => {
  // @ts-ignore
  const classes = useStyles()
  const {closeMobileSidebar} = useLayoutContext()

  const getClassName = (clickable: boolean = true) => classNames(
    className,
    classes.root,
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

  const renderRootNavLink = (element: ReactElement<any>, to: any) => {
    return (
      <NavLink {...other} to={to} className={getClassName()} activeClassName={classes.rootActive}>
        {element}
      </NavLink>
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
  let wrapper
  if (to) wrapper = renderRootNavLink(content, to)
  else if (href) wrapper = renderRootHref(content, href)
  else wrapper = renderRoot(content)
  return (
    <div onClick={closeMobileSidebar}>
      {wrapper}
    </div>
  )
}

