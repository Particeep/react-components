import * as React from 'react'
import {useState} from 'react'
import {Btn, Confirm} from 'mui-extension'

export const ConfirmDemoButton = () => {

  const [isLoading, setIsLoading] = useState(false)

  const action = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1200)
  }

  return (
    <div style={{textAlign: 'center'}}>
      <Confirm
        title="Reset settings?"
        content="This will reset your device to its default factory settings."
        onConfirm={action}>
        <Btn icon="cached" color="primary" variant="contained" loading={isLoading}>Reset</Btn>
      </Confirm>
    </div>
  )
}
