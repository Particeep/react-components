import * as React from 'react'
import {createStyles, Switch, Theme} from '@material-ui/core'
import {useTheme, useToggleTheme} from '../../theme/ThemeContext'
import {DownloadIcon, Sidebar, SidebarBody, SidebarFooter, SidebarHeader, SidebarItem} from 'mui-extension'
import {makeStyles} from '@material-ui/core'
import packageJson from '../../../../package.json'
import {Link} from 'react-router-dom'

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
    <Sidebar>
      <SidebarHeader>
        <Link to={path('/home')} component={(prop, ref) => <SidebarItem ref={ref} icon="home" large>Home</SidebarItem>}/>
        <Link to={path('/install')} component={(prop, ref) => <SidebarItem ref={ref} icon={<DownloadIcon/>} large>Installation</SidebarItem>}/>
        {/*<SidebarItem to={path('/home')} icon="home" large>Home</SidebarItem>*/}
        {/*<SidebarItem to={path('/install')} icon={<DownloadIcon/>} large>
          Installation
        </SidebarItem>
        */}
        {/*
        <SidebarItem
          href="https://github.com/alexandreannic/mui-extension"
          icon={<GitHubIcon/>}
          target="_blank"
          large>
          GitHub
          <Icon className={classes.itemI}>open_in_new</Icon>
        </SidebarItem>
        */}
      </SidebarHeader>
      <SidebarBody>
        {/*<SidebarItem to={path('/stepper')}>ExpensionStepper</SidebarItem>*/}
        {/*<SidebarItem to={path('/autocomplete')}>Autocomplete</SidebarItem>*/}
        {/*<SidebarItem to={path('/btn')}>Btn</SidebarItem>*/}
        {/*<SidebarItem to={path('/btn-uploader')}>BtnUploader</SidebarItem>*/}
        {/*<SidebarItem to={path('/txt')}>Txt</SidebarItem>*/}
        {/*<SidebarItem to={path('/confirm')}>Confirm</SidebarItem>*/}
        {/*<SidebarItem to={path('/panel')}>Panel</SidebarItem>*/}
        {/*<SidebarItem to={path('/alert')}>Alert</SidebarItem>*/}
        {/*<SidebarItem to={path('/icons')}>Icons</SidebarItem>*/}
        {/*<SidebarItem to={path('/fender')}>Fender</SidebarItem>*/}
        {/*<SidebarItem to={path('/toast')}>Toast</SidebarItem>*/}
        {/*<SidebarItem to={path('/global-progress')}>GlobalProgress</SidebarItem>*/}
        {/*<SidebarItem to={path('/animate')}>Animate</SidebarItem>*/}
        {/*<SidebarItem to={path('/table-sort')}>TableSort</SidebarItem>*/}
        {/*<SidebarItem to={path('/input-date')}>InputDate</SidebarItem>*/}
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
