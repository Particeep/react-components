import * as React from 'react'
import {Fender} from '../../../lib/index'

const marginBottom = {style: {marginBottom: 24}}

export const FenderDemoSimple = () => {
  return (
    <div>
      <Fender {...marginBottom}>
        No more data
      </Fender>
      <Fender type="loading" {...marginBottom}>
        Wait a moment please...
      </Fender>
      <Fender type="error" {...marginBottom}>
        Something weng wrong !
      </Fender>
      <Fender type="success" {...marginBottom}>
        Everything is ok
      </Fender>
      <Fender type="warning">
        Take care of you
      </Fender>
    </div>
  )
}

