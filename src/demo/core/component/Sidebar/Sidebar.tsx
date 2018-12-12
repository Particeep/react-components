import * as React from 'react'
import {createStyles, Icon, Switch, Theme, WithStyles, withStyles} from '@material-ui/core'
import {useTheme, useToggleTheme} from '../../theme/ThemeContext'
import {SidebarHeader} from '../Layout/Sidebar/SidebarHeader'
import {Sidebar, SidebarBody, SidebarFooter, SidebarItem} from '../Layout/Sidebar'
import {GitHubIcon} from '../../../../lib/icon'

const styles = (t: Theme) => createStyles({
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

export const Menu = withStyles(styles)(({classes, className, basePath = ''}: IProps) => {
  const isDarkTheme = useTheme()
  const toggleDarkTheme = useToggleTheme()
  return (
    <Sidebar>
      <SidebarHeader>
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
      </SidebarHeader>
      <SidebarBody>
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
      </SidebarBody>
      <SidebarFooter>
        <SidebarItem icon="brightness_3">
          Night mode
          <Switch color="primary" className={classes.itemI} checked={isDarkTheme} onChange={toggleDarkTheme}/>
        </SidebarItem>
      </SidebarFooter>
    </Sidebar>
  )
})
