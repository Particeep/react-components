import * as React from 'react'
import {Animate, Page} from '../../../lib/index'
import {Card, CardContent, Divider, Grid, Typography} from '@material-ui/core'
import AnimateList from '../../../lib/Animate/AnimateList'

const size = 40
const delay = 40

class AnimateDemo extends React.Component<{}, any> {

  render() {
    return (
      <Page>
        <Typography paragraph>
          There is not intermediate element. Animations are directly added to the children.
          So it can be used in a grid without breaking it.
        </Typography>

        <Animate delay={(size + 1) * delay}>
          <Card>
            <CardContent>
              Coucou
            </CardContent>
          </Card>
        </Animate>

        <Divider style={{marginTop: 16, marginBottom: 16}}/>

        <Grid container spacing={16}>
          <AnimateList initialDelay={300} delay={delay}>
            <Grid item md={3}>
              <Card>
                <CardContent>
                  Coucou2
                </CardContent>
              </Card>
            </Grid>
            {new Array(40).fill(1).map((x, i) =>
              <Grid item md={3} key={i}>
                <Card>
                  <CardContent>
                    Coucou
                  </CardContent>
                </Card>
              </Grid>
            )}
          </AnimateList>
        </Grid>
      </Page>
    )
  }
}

export default AnimateDemo
