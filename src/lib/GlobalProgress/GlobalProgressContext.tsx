import * as React from 'react'
import autobind from 'autobind-decorator'

export const GlobalProgressContext = React.createContext({})

export const progressbarAnimationDuration = 400

export interface IProgressState {
  currentStep: number,
  steps: number,
  started: boolean,
}

interface IProps {
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

  private timeouts = []

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
    return (
      <GlobalProgressContext.Provider value={this.state}>
        {this.props.children}
      </GlobalProgressContext.Provider>
    )
  }

  componentWillUnmount() {
    this.clearTimeouts()
  }

  @autobind
  private start(steps: number = 1) {
    this.clearTimeouts()
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
      currentStep: 0,
    })
  }

  @autobind
  private end() {
    if (this.state.started) {
      this.setState(state => ({
        currentStep: state.steps,
      }), this.stopHandlingAnimation)
    }
  }

  @autobind
  private next() {
    if (this.state.started) {
      this.setState(state => ({
        currentStep: Math.min(state.currentStep + 1, state.steps),
      }), () => this.state.currentStep === this.state.steps && this.stopHandlingAnimation())
    }
  }

  private stopHandlingAnimation() {
    this.setTimeout(() => this.setState({started: false}), progressbarAnimationDuration)
    this.setTimeout(() => this.setState({currentStep: 0}), progressbarAnimationDuration * 2)
  }

  private setTimeout(fn: () => void, duration?: number) {
    this.timeouts.push(setTimeout(fn, duration))
  }

  private clearTimeouts() {
    this.timeouts.map(clearTimeout)
    this.timeouts = []
  }
}

export default GlobalProgressProvider

export const withGlobalProgress = (Component: any) => (props: any) => (
  <GlobalProgressContext.Consumer>
    {(other: WithProgress) => <Component {...props} {...other}/>}
  </GlobalProgressContext.Consumer>
)
