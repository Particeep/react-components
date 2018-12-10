import * as React from 'react'
import {Page} from '../../../lib/Page/index'
import {NavLink} from 'react-router-dom'
import {PageTitle} from '../../shared/PageHeader/PageTitle'

export const Home = () => {
  return (
    <Page>
      <PageTitle>Mui-extension</PageTitle>
      <p>
        Set of UI components based on Material-UI.
      </p>
    </Page>
  )
}
