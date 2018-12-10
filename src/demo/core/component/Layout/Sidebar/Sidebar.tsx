import * as React from 'react'
import {createStyles, Icon, SwipeableDrawer, Switch, Theme, WithStyles, withStyles} from '@material-ui/core'
import SidebarItem from './SidebarItem'
import {GitHubIcon} from '../../../../../lib/icon/index'
import {useTheme, useToggleTheme} from '../../../theme/ThemeContext'
import classNames from 'classnames'
import {useSidebarContext} from '../LayoutContext'
import {sidebarWith} from '../Layout'
import {Header} from '../Header/Header'

const styles = (t: Theme) => createStyles({
  root: {
    width: sidebarWith,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 0,
  },
  head: {
    paddingTop: t.spacing.unit / 2,
    paddingBottom: t.spacing.unit / 2,
    borderTop: '1px solid ' + t.palette.divider,
    borderBottom: '1px solid ' + t.palette.divider,
  },
  main: {
    paddingTop: t.spacing.unit / 2,
    paddingBottom: t.spacing.unit / 2,
    flex: 1,
    overflowY: 'auto',
  },
  foot: {
    paddingTop: t.spacing.unit / 2,
    borderTop: '1px solid ' + t.palette.divider,
  },
  avatar: {
    background: t.palette.divider,
    margin: 'auto',
  },
  itemI: {
    marginLeft: 'auto',
    color: t.palette.text.disabled,
  }
})

interface IProps extends WithStyles<typeof styles> {
  basePath?: string
  className?: string
}

export const Sidebar = withStyles(styles)(({classes, className, basePath = ''}: IProps) => {
  const isDarkTheme = useTheme()
  const toggleDarkTheme = useToggleTheme()
  const {isMobileWidth, isMobileSidebarOpened, openMobileSidebar, closeMobileSidebar} = useSidebarContext()
  const opened = !isMobileWidth || isMobileSidebarOpened

  return (
    <SwipeableDrawer
      open={opened}
      onOpen={openMobileSidebar}
      onClose={closeMobileSidebar}
      variant={isMobileWidth ? 'temporary' : 'permanent'}>
      <>
        <div className={classNames(classes.root, className)}>
          <Header/>
          <header className={classes.head}>
            <SidebarItem to={basePath + 'home'} icon="home" large>
              Home
            </SidebarItem>
            <SidebarItem
              href="https://github.com/alexandreannic/react-components"
              before={<GitHubIcon/>}
              target="_blank"
              large>
              GitHub
              <Icon className={classes.itemI}>
                open_in_new
              </Icon>
            </SidebarItem>
          </header>
          <main className={classes.main}>
            <SidebarItem to={basePath + '/stepper'}>ExpensionStepper</SidebarItem>
            <SidebarItem to={basePath + '/autocomplete'}>Autocomplete</SidebarItem>
            <SidebarItem to={basePath + '/btn'}>Btn</SidebarItem>
            <SidebarItem to={basePath + '/btn-uploader'}>BtnUpLoader</SidebarItem>
            <SidebarItem to={basePath + '/confirm'}>Confirm</SidebarItem>
            <SidebarItem to={basePath + '/panel'}>Panel</SidebarItem>
            <SidebarItem to={basePath + '/alert'}>Alert</SidebarItem>
            <SidebarItem to={basePath + '/icons'}>Icons</SidebarItem>
            <SidebarItem to={basePath + '/fender'}>Fender</SidebarItem>
            <SidebarItem to={basePath + '/toast'}>Toast</SidebarItem>
            <SidebarItem to={basePath + '/global-progress'}>GlobalProgress</SidebarItem>
            <SidebarItem to={basePath + '/animate'}>Animate</SidebarItem>
            <SidebarItem to={basePath + '/table-sort'}>TableSort</SidebarItem>
            <SidebarItem to={basePath + '/input-date'}>InputDate</SidebarItem>
          </main>
          <footer className={classes.foot}>
            <SidebarItem icon="brightness_3">
              Night mode
              <Switch color="primary" className={classes.itemI} checked={isDarkTheme} onChange={toggleDarkTheme}/>
            </SidebarItem>
          </footer>
        </div>
      </>
    </SwipeableDrawer>
  )
})
