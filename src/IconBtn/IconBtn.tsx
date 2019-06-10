import * as React from 'react'
import {ReactChild} from 'react'
import {CircularProgress, IconButton} from '@material-ui/core'
import {IconButtonProps} from '@material-ui/core/IconButton'


interface Props extends IconButtonProps {
  loading?: boolean
  icon?: string
  children: ReactChild
}

export const IconBtn = ({icon, loading, children, disabled, ...props}: Props) => {
  return (
    <IconButton {...props} disabled={disabled || loading}>
      {loading
        ? <CircularProgress size={24}/>
        : <>{icon}{children}</>
      }
    </IconButton>
  )
}
