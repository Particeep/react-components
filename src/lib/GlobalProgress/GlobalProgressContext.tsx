import * as React from 'react'
import autobind from 'autobind-decorator'
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core'

const ProgressBar = require('react-progress-bar-plus')

export const GlobalProgressContext = React.createContext({})

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

export interface IProgressState {
  currentStep: number,
  steps: number,
  started: boolean,
}

interface IProps extends WithStyles<typeof styles> {
}

export interface WithProgress {
  readonly progressStart: (steps?: number) => void;
  readonly progressStop: () => void;
  readonly progressEnd: () => void;
  readonly progressNext: () => void;
  readonly promisesWithProgress: (...promises: Promise<any>[]) => void;
}

export interface IState extends IProgressState,
  WithProgress {}

class GlobalProgressProvider extends React.Component<IProps, IState> {

  readonly INITIAL_PERCENT = 10

  state = {
    currentStep: 0,
    steps: 1,
    started: false,
    progressStart: this.start,
    progressStop: this.stop,
    progressEnd: this.end,
    progressNext: this.next,
    promisesWithProgress: this.promisesWithProgress,
  }

  render() {
    const {classes} = this.props
    return (
      <GlobalProgressContext.Provider value={this.state}>
        {this.props.children}
        <ProgressBar
          percent={this.getPercent()}
          autoIncrement={this.state.started}
          spinner={false}
          intervalTime={400}/>
      </GlobalProgressContext.Provider>
    )
  }

  private getPercent() {
    const {steps, currentStep} = this.state
    return this.INITIAL_PERCENT + (100 - this.INITIAL_PERCENT) / steps * currentStep
  }

  @autobind
  private start(steps: number = 1) {
    this.setState({
      started: true,
      currentStep: 0,
      steps,
    })
  }

  @autobind
  private promisesWithProgress(...promises: Promise<any>[]) {
    this.start(promises.length)
    promises.forEach(p => {
      p
        .then(x => {
          this.next()
          return x
        })
        .catch(x => {
          this.stop()
          return x
        })
    })
  }

  @autobind
  private stop() {
    this.setState({
      started: false,
    })
  }

  @autobind
  private end() {
    if (this.state.started) {
      this.setState(state => ({
        currentStep: state.steps,
        started: false,
      }))
    }
  }

  @autobind
  private next() {
    if (this.state.started) {
      this.setState(state => ({
        currentStep: Math.min(state.currentStep + 1, state.steps)
      }))
    }
  }
}

export default withStyles(styles)(GlobalProgressProvider)

export const withGlobalProgress = (Component: any) => (props: any) => (
  <GlobalProgressContext.Consumer>
    {(other: WithProgress) => <Component {...props} {...other}/>}
  </GlobalProgressContext.Consumer>
)
