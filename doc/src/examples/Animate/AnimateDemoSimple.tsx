import * as React from 'react'
import {Animate} from 'mui-extension'
import {Card, CardContent} from '@material-ui/core'

export const AnimateDemoSimple = () => {
  return (
    <Animate delay={100}>
      <Card>
        <CardContent>Some content</CardContent>
      </Card>
    </Animate>
  )
}
