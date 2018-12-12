import * as React from 'react'
import {Fender} from 'mui-extension'

const marginBottom = {style: {marginBottom: 24}}

export const FenderDemoSimple = () => {
  return (
    <div>
      <Fender {...marginBottom}>
        <div>No data</div>
      </Fender>
      <Fender type="loading" {...marginBottom}>
        A simple <b>loading</b> fender
      </Fender>
      <Fender type="error" {...marginBottom}>
        A simple <b>error</b> fender
      </Fender>
      <Fender type="success" {...marginBottom}>
        A simple <b>success</b> fender
      </Fender>
      <Fender type="warning">
        A simple <b>warning</b> fender
      </Fender>
    </div>
  )
}

