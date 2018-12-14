import * as React from 'react'
import {ReactChild, ReactNode} from 'react'
import {createStyles, Theme, withStyles} from '@material-ui/core'
import {LayoutProvider, useLayoutContext} from './LayoutContext'
import {MobileHeader} from './MobileHeader/MobileHeader'
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

interface IProps {
  title?: string
  children?: ReactChild
  mobileBreakpoint?: number
  sidebar?: ReactNode
}

export const Layout = ({title, mobileBreakpoint, children, sidebar}: IProps) => {
  return (
    <LayoutProvider title={title} mobileBreakpoint={mobileBreakpoint}>
      <LayoutUsingContext sidebar={sidebar}>
        {children}
      </LayoutUsingContext>
    </LayoutProvider>
  )
}

const LayoutUsingContext = withStyles(styles)(({children, classes, sidebar: Sidebar}: any) => {
  const {isMobileWidth} = useLayoutContext()

  return (
    <>
      <MobileHeader/>
      <div className={classNames(classes.root, !isMobileWidth && classes.rootDesktop)}>
        {Sidebar && <Sidebar/>}
        {children}
      </div>
    </>
  )
})
