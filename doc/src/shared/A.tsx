import * as React from 'react'
import classNames from 'classnames'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core'

const useStyles = makeStyles((t: Theme) => ({
  root: {
    color: t.palette.primary.main,
    textDecoration: 'underline',
  }
}))

export const A = ({children, className, ...props}: any) => {
  // @ts-ignore
  const css = useStyles()
  return (
    <>
      {' '}
      <a {...props} className={classNames(className, css.root)}>{children}</a>
      {' '}
    </>
  )
}
