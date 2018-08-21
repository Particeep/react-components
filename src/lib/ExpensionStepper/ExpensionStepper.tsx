import * as React from 'react';
import {ReactElement} from 'react';
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core';
import {ExpensionStepProps} from './index';

const styles = (t: Theme) => createStyles({});


interface Props extends WithStyles<typeof styles> {
  readonly className?: string;
  readonly free?: boolean;
  readonly onNext?: (index: number, data?: any) => void;
  readonly onEnd?: () => void;
  readonly children?: ReactElement<ExpensionStepProps>[];
}

interface State {
  current: number;
  reached: number;
}

class ExpensionStepper extends React.Component<Props, State> {

  render() {
    const {className, ...other} = this.props;
    return (
      <div className={className} {...other}>
        {React.Children.map(this.props.children, (step: ReactElement<ExpensionStepProps>, i: number) =>
          React.cloneElement(step, {
            prev: this.prev,
            next: this.next,
            goTo: this.goTo,
            free: this.props.free,
            index: i,
            disabled: i > this.state.reached,
            done: i < this.state.reached,
            isCurrent: i == this.state.current,
            isLast: i == React.Children.count(this.props.children) - 1
          })
        )}
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      reached: props.free ? React.Children.count(this.props.children) - 1 : 0,
    }
  }

  goTo = (i: number) => {
    if (this.state.reached >= i) this.setState({current: i});
  };

  prev = () => {
    if (this.state.current > 0) {
      this.setState({current: this.state.current - 1});
    }
  };

  next = (data?: any) => {
    if (this.state.current < React.Children.count(this.props.children) - 1) {
      this.props.onNext && this.props.onNext(this.state.current, data);
      this.setState({
        current: this.state.current + 1,
        reached: Math.max(this.state.reached, this.state.current + 1)
      });
    } else if (this.props.onEnd) {
      this.props.onEnd();
    }
  };
}

export default withStyles(styles)(ExpensionStepper);
