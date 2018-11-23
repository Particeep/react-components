import * as React from 'react'
import {createStyles, Icon, Slide, Theme, WithStyles, withStyles} from '@material-ui/core'
import {sidebarWith} from './SidebarLayout'
import SidebarHr from './SidebarHr'
import SidebarItem from './SidebarItem'
import {GitHubIcon} from '../../../../lib/icon'

const styles = (t: Theme) => createStyles({
  root: {
    top: 0,
    left: 0,
    width: sidebarWith,
    position: 'fixed',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: t.spacing.unit,
    borderRadius: 0,
  },
  main: {
    paddingTop: t.spacing.unit,
    paddingBottom: t.spacing.unit,
    flex: 1,
    overflowY: 'auto',
  },
  foot: {
    paddingTop: t.spacing.unit,
    paddingBottom: t.spacing.unit,
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
  basePath?: string;
}

class Sidebar extends React.Component<IProps, {}> {

  static defaultProps = {
    basePath: '',
  }

  render() {
    const {classes, basePath} = this.props
    return (
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <div className={classes.root}>
          <main className={classes.main}>
            <SidebarItem to={basePath + 'home'} icon="home">
              Home
            </SidebarItem>
            <SidebarItem
              href="https://github.com/alexandreannic/react-components"
              before={<GitHubIcon/>}
              target="_blank">
              GitHub
              <Icon className={classes.itemI}>
                open_in_new
              </Icon>
            </SidebarItem>
            <SidebarHr margin/>
            <SidebarItem to={basePath + '/stepper'}>ExpensionStepper</SidebarItem>
            <SidebarItem to={basePath + '/pick'}>Pick</SidebarItem>
            <SidebarItem to={basePath + '/btn'}>Btn</SidebarItem>
            <SidebarItem to={basePath + '/btn-confirm'}>BtnConfirm</SidebarItem>
            <SidebarItem to={basePath + '/chips-uploader'}>ChipsUploader</SidebarItem>
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
          <SidebarHr/>
          <footer className={classes.foot}>

          </footer>
        </div>
      </Slide>
    )
  }
}

export default withStyles(styles)(Sidebar)
