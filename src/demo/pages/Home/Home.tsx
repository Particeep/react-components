import * as React from 'react'
import {Page} from '../../../lib/Page/index'
import {NavLink} from 'react-router-dom'
import {PageTitle} from '../../shared/PageHeader/PageTitle'

export const Home = () => {
  return (
    <Page>
      <PageTitle>react-components</PageTitle>
      <p>
        Some are simple wrappers whose purpose is to simplify API or specify the design.
      </p>
    </Page>
  )
}
