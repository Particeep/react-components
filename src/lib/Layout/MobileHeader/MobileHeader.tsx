import {createStyles, Slide, Theme, withStyles} from '@material-ui/core'
import * as React from 'react'
import {Header, heightHeight} from '../Header/Header'
import {useSidebarContext} from '../LayoutContext'

const styles = (t: Theme) => createStyles({
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    boxShadow: t.shadows[3],
  },
  mock: {
    height: heightHeight,
  },
})

export const MobileHeader = withStyles(styles)(({classes}: any) => {
  const {isMobileWidth} = useSidebarContext()

  return (
    <Slide direction="down" in={isMobileWidth} mountOnEnter unmountOnExit>
      <>
        <div className={classes.mock}/>
        <Header className={classes.header}/>
      </>
    </Slide>
  )
})
