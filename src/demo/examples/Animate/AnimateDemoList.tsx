import * as React from 'react'
import {Card, CardContent, Grid} from '@material-ui/core'
import AnimateList from 'mui-extension'

export const AnimateDemoList = () => {
  return (
    <Grid container spacing={16} style={{overflowY: 'hidden'}}>
      <AnimateList initialDelay={300} delay={40}>
        <Grid item md={3}>
          <Card>
            <CardContent>Different content</CardContent>
          </Card>
        </Grid>
        {new Array(40).fill(1).map((x, i) =>
          <Grid item md={3} key={i}>
            <Card>
              <CardContent>Content</CardContent>
            </Card>
          </Grid>
        )}
      </AnimateList>
    </Grid>
  )
}
