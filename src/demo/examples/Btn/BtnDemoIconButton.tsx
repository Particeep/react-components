import * as React from 'react'
import {useState} from 'react'
import {Icon} from '@material-ui/core'
import IconBtn from 'mui-extension'

export const BtnDemoIconButton = () => {
  const [isLoading, setIsLoading] = useState(false)

  const upload = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div style={{padding: 16, display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <IconBtn loading={isLoading} onClick={upload}>
        <Icon>send</Icon>
      </IconBtn>
      <IconBtn loading={isLoading} onClick={upload} color="primary">
        <Icon>delete</Icon>
      </IconBtn>
    </div>
  )
}
