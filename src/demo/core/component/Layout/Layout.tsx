import * as React from 'react'
import {ReactChild} from 'react'
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core'
import {LayoutProvider, useSidebarContext} from './LayoutContext'
import {MobileHeader} from './MobileHeader/MobileHeader'
import {Sidebar} from './Sidebar/Sidebar'
import classNames from 'classnames'

export const sidebarWith = 220

const styles = (t: Theme) => createStyles({
  root: {
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  rootDesktop: {
    marginLeft: sidebarWith,
  },
  body: {
    flex: 1,
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: t.palette.background.paper,
  },
})

interface IProps extends WithStyles<typeof styles> {
  children?: ReactChild
}

export const Layout = ({children}) => {
  return (
    <LayoutProvider>
      <LayoutUsingContext>
        {children}
      </LayoutUsingContext>
    </LayoutProvider>
  )
}

const LayoutUsingContext = withStyles(styles)(({children, classes}: IProps) => {
  const {isMobileWidth} = useSidebarContext()

  return (
    <>
      <MobileHeader/>
      <div className={classNames(classes.root, !isMobileWidth && classes.rootDesktop)}>
        <Sidebar/>
        {children}
      </div>
    </>
  )
})
