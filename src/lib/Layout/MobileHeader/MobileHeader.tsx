import {createStyles, Slide, Theme, withStyles} from '@material-ui/core'
import * as React from 'react'
import {Header, headerHeight} from '../Header/Header'
import {useLayoutContext} from '../LayoutContext'

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
    height: headerHeight,
  },
})

export const MobileHeader = withStyles(styles)(({classes}: any) => {
  const {isMobileWidth} = useLayoutContext()

  return (
    <Slide direction="down" in={isMobileWidth} mountOnEnter unmountOnExit>
      <>
        <div className={classes.mock}/>
        <Header className={classes.header}/>
      </>
    </Slide>
  )
})
