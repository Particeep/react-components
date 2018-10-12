import * as React from 'react'
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core'
import {IProgressState, withGlobalProgress} from './GlobalProgressContext'

const ProgressBar = require('react-progress-bar-plus')

const progressbarColor = (t: Theme) => t.palette.secondary.main

const styles = (t: Theme) => createStyles({
  '@global': {
    '.react-progress-bar-percent': {
      background: progressbarColor(t),
      boxShadow: `0 0 10px ${progressbarColor(t)}, 0 0 5px ${progressbarColor(t)}`,
      height: 2,
      transition: t.transitions.create('all', {duration: 400}),
    },
    '.react-progress-bar': {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      visibility: 'visible',
      opacity: 1,
      transition: 'all 400ms',
      zIndex: 9999,
    },
    '.react-progress-bar-hide': {
      opacity: 0,
      visibility: 'hidden',
      zIndex: -10,
    }
  }
})

interface IProps extends WithStyles<typeof styles>, IProgressState {
  style?: object
}

export interface WithProgress {
  readonly progressStart: (steps?: number) => void;
  readonly progressStop: () => void;
  readonly progressEnd: () => void;
  readonly progressNext: () => void;
  readonly promisesWithProgress: (...promises: Promise<any>[]) => void;
}

class GlobalProgressBar extends React.PureComponent<any, {}> {

  readonly INITIAL_PERCENT = 10

  render() {
    const {classes, style} = this.props
    return (
      <ProgressBar
        style={style}
        percent={this.getPercent()}
        autoIncrement={this.props.started}
        spinner={false}
        intervalTime={400}/>
    )
  }

  private getPercent() {
    const {steps, currentStep} = this.props
    return this.INITIAL_PERCENT + (100 - this.INITIAL_PERCENT) / steps * currentStep
  }
}

export default withStyles(styles)(withGlobalProgress(GlobalProgressBar))
