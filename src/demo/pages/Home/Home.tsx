import * as React from 'react'
import {Page} from '../../../lib/Page/index'
import {NavLink} from 'react-router-dom'
import {PageTitle} from '../../shared/PageHeader/PageTitle'
import {createStyles, Theme, withStyles} from '@material-ui/core'

const styles = (t: Theme) => createStyles({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 0,
  }
})

export const Home = withStyles(styles)(({classes}: any) => {
  return (
    <Page className={classes.root}>
      <div>
        <PageTitle>Mui-extension</PageTitle>
        <p>
          Set of UI components based on Material-UI.
        </p>
      </div>
    </Page>
  )
})
