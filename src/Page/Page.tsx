import * as React from 'react'
import {ReactNode, useEffect, useState} from 'react'
import {Theme} from '@material-ui/core'
import classNames from 'classnames'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((t: Theme) => ({
  root: {
    transition: t.transitions.create('all'),
    margin: 'auto',
    opacity: 0,
    transform: 'scale(.94)',
    maxWidth: 932,
    width: '100%',
  },
  root_appeared: {
    opacity: 1,
    transform: 'scale(1)',
  }
}))

interface Props {
  width?: number
  animated?: boolean
  className?: any
  style?: object
  children: ReactNode
}

let timeout

const Page = ({children, width, animated = true, className, style,}: Props) => {
  // @ts-ignore
  const classes = useStyles()
  const [appeared, setAppeared] = useState(false)

  useEffect(() => {
    if (animated) timeout = setTimeout(() => setAppeared(true))
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className={classNames(classes.root, (!animated || appeared) && classes.root_appeared, className)}
         style={{...(width && {maxWidth: width}), ...style}}>
      {children}
    </div>
  )
}

export default Page

