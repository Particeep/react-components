import * as React from 'react'
import InputDate from '../../../lib/InputDate/InputDate'

export const InputDateDemoSimple = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <InputDate format="yyyy-mm-dd"/>
      <InputDate format="yyyy.mm.dd"/>
    </div>
  )
}
