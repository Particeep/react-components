import * as React from 'react'
import {HTMLProps, ReactChild, ReactElement} from 'react'
import {createStyles, Icon, Theme, WithStyles, withStyles} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import {fade} from '@material-ui/core/styles/colorManipulator'
import {css} from '../../../demo/core/theme/style'

const styles = (t: Theme) => createStyles({
  root: {
    transition: t.transitions.create('all'),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'inherit',
    paddingRight: t.spacing.unit,
    paddingLeft: t.spacing.unit * 2,
    color: t.palette.text.primary,
    minHeight: 32,
    marginTop: t.spacing.unit / 8,
    marginBottom: t.spacing.unit / 8,
    marginRight: t.spacing.unit,
    marginLeft: t.spacing.unit,
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
    textAlign: 'center',
    marginRight: t.spacing.unit * 2,
  },
  before: {
    display: 'flex',
    alignItems: 'center'
  },
  label: {
    ...css.noWrap,
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    fontSize: t.typography.fontSize,
    fontWeight: t.typography.fontWeightMedium,
  },
})

interface IProps extends WithStyles<typeof styles>, HTMLProps<any> {
  icon?: string
  before?: ReactChild
  to?: any
  href?: any
  className?: any
  large?: boolean
}

export const SidebarItem = withStyles(styles)(({classes, href, to, children, icon, before, className, large, ...other}: IProps) => {

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

  const item = (
    <>
      {icon && <Icon className={classes.i}>{icon}</Icon>}
      {before && <div className={classNames(classes.i, classes.before)}>{before}</div>}
      <span className={classes.label}>{children}</span>
    </>
  )
  if (to) return renderRootNavLink(item, to)
  if (href) return renderRootHref(item, href)
  return renderRoot(item)
})
