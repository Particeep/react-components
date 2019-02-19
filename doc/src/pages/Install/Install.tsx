import * as React from 'react'
import {Page} from '../../shared/Page/Page'
import {NavLink} from 'react-router-dom'
// @ts-ignore
import {Pre} from '../../../../src/template/Demo/Pre/Pre'
import {A} from '../../shared/A'

// const useStyles = makeStyles((t: Theme) => ({
// }))

export const Install = () => {
  // @ts-ignore
  // const classes = useStyles()
  return (
    <Page>
      <h1>Installation</h1>
      <p>Install Mui-extension source files via npm.</p>
      <Pre raw={'npm i -s git+https://github.com/alexandreannic/mui-extension.git'}/>

      <p>
        Material-UI was designed with the
        <A href="https://fonts.google.com/specimen/Roboto">Roboto</A>
        font in mind. So be sure to follow these
        <A href="https://material-ui.com/style/typography/#general">instructions</A>
        . For instance, via Google Web Fonts:
      </p>
      <Pre raw={'<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">'}/>

      <p>
        In order to use the font Icon component you must first add the
        <A href="https://material.io/tools/icons/?style=baseline">Material icons</A>
        font. Here are some
        <A href="https://material-ui.com/style/icons/#font-icons">instructions</A>
        on how to do so. For instance, via Google Web Fonts:
      </p>
      <Pre raw={`<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">`}/>
    </Page>
  )
}
