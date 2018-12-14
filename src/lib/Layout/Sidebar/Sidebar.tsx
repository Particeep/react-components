import * as React from 'react'
import {ReactNode} from 'react'
import {createStyles, SwipeableDrawer, Theme, WithStyles, withStyles} from '@material-ui/core'
import classNames from 'classnames'
import {sidebarWith} from '../Layout'
import {Header} from '../Header/Header'
import {useLayoutContext} from '../LayoutContext'

const styles = (t: Theme) => createStyles({
  root: {
    width: sidebarWith,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 0,
  },
})

interface IProps extends WithStyles<typeof styles> {
  className?: string
  children?: ReactNode
}

export const Sidebar = withStyles(styles)(({children, classes, className}: IProps) => {
  const {isMobileWidth, isMobileSidebarOpened, openMobileSidebar, closeMobileSidebar} = useLayoutContext()
  const opened = !isMobileWidth || isMobileSidebarOpened

  console.log(closeMobileSidebar)
  return (
    <SwipeableDrawer
      open={opened}
      onOpen={openMobileSidebar}
      onClose={closeMobileSidebar}
      variant={isMobileWidth ? 'temporary' : 'permanent'}>
      <>
        <div className={classNames(classes.root, className)}>
          <Header/>
          {children}
        </div>
      </>
    </SwipeableDrawer>
  )
})
