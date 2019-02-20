import * as React from 'react'
import {InputDate} from 'mui-extension'

export const InputDateDemoSimple = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <InputDate format="yyyy-mm-dd"/>
      <InputDate format="yyyy.mm.dd"/>
    </div>
  )
}
