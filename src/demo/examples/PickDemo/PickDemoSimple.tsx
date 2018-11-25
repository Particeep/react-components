import * as React from 'react'
import {useState} from 'react'
import {Pick, PickItem} from '../../../lib/index'

export const PickDemoSimple = () => {
  const [value, setValue] = useState([])
  return (
    <div>
      <Pick onChange={setValue} value={value} searchLabel="Search...">
        <PickItem value="aabbcc">aabbcc</PickItem>
        <PickItem value="aabc">aabc</PickItem>
        <PickItem value="abbc">abbc</PickItem>
      </Pick>
    </div>
  )
}
