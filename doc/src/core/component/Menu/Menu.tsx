import * as React from 'react'
import {Icon, Switch, Theme} from '@material-ui/core'
import {useTheme, useToggleTheme} from '../../theme/ThemeContext'
import {GitHubIcon} from 'mui-extension'
import {Sidebar, SidebarBody, SidebarFooter, SidebarHeader, SidebarItem, DownloadIcon} from 'mui-extension'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((t: Theme) => ({
  avatar: {
    background: t.palette.divider,
    margin: 'auto',
  },
  itemI: {
    marginLeft: 'auto',
    color: t.palette.text.disabled,
  }
}))

interface IProps {
  basePath?: string
  className?: string
}

export const Menu = ({className, basePath = ''}: IProps) => {
  // @ts-ignore
  const classes = useStyles()
  const isDarkTheme = useTheme()
  const toggleDarkTheme = useToggleTheme()
  const path = (page: string) => basePath + page
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarItem to={path('home')} icon="home" large>
          Home
        </SidebarItem>
        <SidebarItem to={path('install')} icon={<DownloadIcon/>} large>
          Installation
        </SidebarItem>
        <SidebarItem
          href="https://github.com/alexandreannic/mui-extension"
          icon={<GitHubIcon/>}
          target="_blank"
          large>
          GitHub
          <Icon className={classes.itemI}>open_in_new</Icon>
        </SidebarItem>
      </SidebarHeader>
      <SidebarBody>
        <SidebarItem to={path('/stepper')}>ExpensionStepper</SidebarItem>
        <SidebarItem to={path('/autocomplete')}>Autocomplete</SidebarItem>
        <SidebarItem to={path('/btn')}>Btn</SidebarItem>
        <SidebarItem to={path('/btn-uploader')}>BtnUploader</SidebarItem>
        <SidebarItem to={path('/confirm')}>Confirm</SidebarItem>
        <SidebarItem to={path('/panel')}>Panel</SidebarItem>
        <SidebarItem to={path('/alert')}>Alert</SidebarItem>
        <SidebarItem to={path('/icons')}>Icons</SidebarItem>
        <SidebarItem to={path('/fender')}>Fender</SidebarItem>
        <SidebarItem to={path('/toast')}>Toast</SidebarItem>
        <SidebarItem to={path('/global-progress')}>GlobalProgress</SidebarItem>
        <SidebarItem to={path('/animate')}>Animate</SidebarItem>
        <SidebarItem to={path('/table-sort')}>TableSort</SidebarItem>
        <SidebarItem to={path('/input-date')}>InputDate</SidebarItem>
      </SidebarBody>
      <SidebarFooter>
        <SidebarItem icon="brightness_3">
          Night mode
          <Switch
            color="primary"
            className={classes.itemI}
            checked={isDarkTheme}
            onChange={toggleDarkTheme}
            style={{marginTop: -4, marginBottom: -4}}/>
        </SidebarItem>
      </SidebarFooter>
    </Sidebar>
  )
}
