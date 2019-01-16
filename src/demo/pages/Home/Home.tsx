import * as React from 'react'
import {Page} from '../../shared/Page/Page'
import {NavLink} from 'react-router-dom'
import {PageTitle} from '../../shared/PageTitle/PageTitle'
import {Theme} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((t: Theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 0,
  }
}))

export const Home = () => {
  // @ts-ignore
  const classes = useStyles()
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
}
