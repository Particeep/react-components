import * as React from 'react'
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core'
import {Page} from '../../lib/Page'
import {withGlobalProgress, WithProgress} from '../../lib/GlobalProgress/GlobalProgressContext'
import autobind from 'autobind-decorator'
import {Btn} from '../../lib/Btn'

const styles = (t: Theme) => createStyles({})

interface IProps extends WithProgress, WithStyles<typeof styles> {
}

export const movies$ = (delay) => new Promise((resolve, reject) => setTimeout(resolve, delay, {}))


class ToastDemo extends React.Component<IProps, {}> {

  private timeouts: any[] = []

  render() {
    return (
      <Page>
        <Btn onClick={this.start}>Start</Btn>
      </Page>
    )
  }

  componentDidMount() {
    const {promisesWithProgress} = this.props
    promisesWithProgress(
      movies$(1000).then(() => {console.log('ok')}),
      movies$(3000).then(() => {console.log('ok2')})
    )
  }

  @autobind
  private start() {
    const {progressStart, progressNext} = this.props
    this.timeouts.map(clearTimeout)
    progressStart(3)
    this.timeouts.push(setTimeout(progressNext, 800))
    this.timeouts.push(setTimeout(progressNext, 2200))
    this.timeouts.push(setTimeout(progressNext, 2800))
  }
}

export default withStyles(styles)(withGlobalProgress(ToastDemo))
