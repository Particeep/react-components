import * as React from 'react'
import {useState} from 'react'
import {Pick, PickItem} from '../../../lib/index'
import {FormControl, FormHelperText, InputLabel} from '@material-ui/core'

export const PickDemoSimple = () => {
  const [value, seValue] = useState([])

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>A label</InputLabel>
        <Pick multiple value={value} onChange={seValue}>
          <PickItem value="aa">aa</PickItem>
          <PickItem value="bb">bb</PickItem>
          <PickItem value="cc">cc</PickItem>
          <PickItem value="dd">dd</PickItem>
          <PickItem value="ee">ee</PickItem>
          <PickItem value="abc">abc</PickItem>
          <PickItem value="aabbcc">aabbcc</PickItem>
          <PickItem value="aabc">aabc</PickItem>
          <PickItem value="abbc">abbc</PickItem>
        </Pick>
        <FormHelperText><b>JS value: </b>{JSON.stringify(value)}</FormHelperText>
      </FormControl>
    </div>
  )
}
