import * as React from 'react'
import {Animate} from '../../../lib/index'
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
