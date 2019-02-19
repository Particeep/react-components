import {createStyles, Icon, Theme, withStyles} from '@material-ui/core'
import * as React from 'react'
import {useLayoutContext} from '../LayoutContext'
import classNames from 'classnames'
import IconBtn from '../../../IconBtn/IconBtn'

export const headerHeight = 52

const styles = (t: Theme) => createStyles({
  root: {
    height: headerHeight,
    display: 'flex',
    alignItems: 'center',
    paddingRight: t.spacing.unit * 2,
    paddingLeft: t.spacing.unit + 2,
    background: t.palette.background.paper,
  },
  hidden: {
    visibility: 'hidden',
  },
  title: {
    flex: 1,
    fontSize: t.typography.title.fontSize,
  }
})

export const Header = withStyles(styles)(({classes, className}: any) => {
  const {title, isMobileWidth, isMobileSidebarOpened, toggleMobileSidebar} = useLayoutContext()

  return (
    <header className={classNames(classes.root, className)}>
      <IconBtn onClick={toggleMobileSidebar} className={isMobileWidth ? '' : classes.hidden}>
        <Icon>{isMobileSidebarOpened ? 'clear' : 'menu'}</Icon>
      </IconBtn>
      <div className={classes.title}>{title}</div>
    </header>
  )
})
