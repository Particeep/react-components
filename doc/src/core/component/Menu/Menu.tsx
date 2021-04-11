import * as React from 'react'
import {createStyles, Icon, makeStyles, Switch, Theme} from '@material-ui/core'
import {useTheme, useToggleTheme} from '../../theme/ThemeContext'
import {DownloadIcon, GitHubIcon, Sidebar, SidebarBody, SidebarFooter, SidebarHeader, SidebarItem} from 'mui-extension'
import packageJson from '../../../../package.json'
import {NavLink as Link} from 'react-router-dom'

const useStyles = makeStyles((t: Theme) => createStyles({
  avatar: {
    background: t.palette.divider,
    margin: 'auto',
  },
  itemI: {
    marginLeft: 'auto',
    color: t.palette.text.disabled,
  },
  version: {
    textAlign: 'center',
    color: t.palette.text.disabled,
    fontSize: t.typography.caption.fontSize,
    letterSpacing: 1
  }
}))

interface IProps {
  basePath?: string
  className?: string
}

export const Menu = ({className, basePath = ''}: IProps) => {
  const classes = useStyles()
  const isDarkTheme = useTheme()
  const toggleDarkTheme = useToggleTheme()
  const path = (page: string) => basePath + page
  return (
    <Sidebar className={className}>
      <SidebarHeader>
        <Link to={path('/stepper')}>
          <SidebarItem icon="home" large>Home</SidebarItem>
        </Link>
        <Link to={path('/install')}>
          <SidebarItem icon={<DownloadIcon/>} large>Installation</SidebarItem>
        </Link>
        <a href="https://github.com/alexandreannic/mui-extension">
          <SidebarItem
            icon={<GitHubIcon/>}
            target="_blank"
            large>
            GitHub
            <Icon className={classes.itemI}>open_in_new</Icon>
          </SidebarItem>
        </a>
      </SidebarHeader>
      <SidebarBody>
        <Link to={path('/stepper')}>
          <SidebarItem>ExpensionStepper</SidebarItem>
        </Link>
        <Link to={path('/autocomplete')}>
          <SidebarItem>Autocomplete</SidebarItem>
        </Link>
        <Link to={path('/btn')}>
          <SidebarItem>Btn</SidebarItem>
        </Link>
        <Link to={path('/btn-uploader')}>
          <SidebarItem>BtnUploader</SidebarItem>
        </Link>
        <Link to={path('/txt')}>
          <SidebarItem>Txt</SidebarItem>
        </Link>
        <Link to={path('/confirm')}>
          <SidebarItem>Confirm</SidebarItem>
        </Link>
        <Link to={path('/panel')}>
          <SidebarItem>Panel</SidebarItem>
        </Link>
        <Link to={path('/alert')}>
          <SidebarItem>Alert</SidebarItem>
        </Link>
        <Link to={path('/icons')}>
          <SidebarItem>Icons</SidebarItem>
        </Link>
        <Link to={path('/fender')}>
          <SidebarItem>Fender</SidebarItem>
        </Link>
        <Link to={path('/toast')}>
          <SidebarItem>Toast</SidebarItem>
        </Link>
        <Link to={path('/global-progress')}>
          <SidebarItem>GlobalProgress</SidebarItem>
        </Link>
        <Link to={path('/animate')}>
          <SidebarItem>Animate</SidebarItem>
        </Link>
        <Link to={path('/table-sort')}>
          <SidebarItem>TableSort</SidebarItem>
        </Link>
        <Link to={path('/input-date')}>
          <SidebarItem>InputDate</SidebarItem>
        </Link>
      </SidebarBody>
      <SidebarFooter>
        <SidebarItem icon="brightness_3">
          Night mode
          <Switch
            color="primary"
            className={classes.itemI}
            checked={isDarkTheme}
            onChange={toggleDarkTheme}/>
        </SidebarItem>
      </SidebarFooter>
      <SidebarFooter>
        <div className={classes.version}>v{packageJson.dependencies['mui-extension']}</div>
      </SidebarFooter>
    </Sidebar>
  )
}
