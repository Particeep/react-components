import * as React from 'react'
import {ReactChild, ReactElement} from 'react'
import {createStyles, Icon, Theme, WithStyles, withStyles} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import {fade} from '@material-ui/core/styles/colorManipulator'
import {css} from '../../theme/style'

const styles = (t: Theme) => createStyles({
  root: {
    transition: t.transitions.create('all'),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'inherit',
    paddingRight: t.spacing.unit,
    paddingLeft: t.spacing.unit * 2,
    color: t.palette.text.primary,
    minHeight: 34,
    marginTop: t.spacing.unit / 4,
    marginBottom: t.spacing.unit / 4,
    cursor: 'pointer',
    borderRadius: 42,
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
  label: {
    ...css.noWrap,
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    fontSize: t.typography.fontSize,
    fontWeight: t.typography.fontWeightMedium,
  },
})

interface IProps extends WithStyles<typeof styles> {
  icon?: string;
  before?: ReactChild;
  to?: any;
  href?: any;
  className?: any;
}

class SidebarItem extends React.Component<IProps & any, any> {

  render() {
    const {classes, href, to, children, icon, before, ...other} = this.props
    const item = (
      <>
        {icon && <Icon className={classes.i}>{icon}</Icon>}
        {before && <div className={classes.i} style={{display: 'flex', alignItems: 'center'}}>{before}</div>}
        <span className={classes.label}>{children}</span>
      </>
    )
    if (to) return this.renderRootNavLink(item, other, to)
    if (href) return this.renderRootHref(item, other, href)
    return this.renderRoot(item, other)
  }

  private renderRoot(element: ReactElement<any>, props: any) {
    const {classes, className} = this.props
    return <div {...props} className={classNames(className, classes.root)}>{element}</div>
  }

  private renderRootNavLink(element: ReactElement<any>, props: any, to: any) {
    const {classes, className} = this.props
    return (
      <NavLink {...props} to={to} className={classNames(className, classes.root)}
               activeClassName={classes.rootActive}>
        {element}
      </NavLink>
    )
  }

  private renderRootHref(element: ReactElement<any>, props: any, href: any) {
    const {classes, className} = this.props
    return (
      <a {...props} href={href} className={classNames(className, classes.root)}>
        {element}
      </a>
    )
  }
}

export default withStyles(styles)(SidebarItem)
