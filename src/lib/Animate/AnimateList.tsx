import * as React from 'react';
import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core';
import classNames from 'classnames';
import {Animate} from './index'

const styles = (t: Theme) => createStyles({
  root: {
    transition: t.transitions.create('all'),
    opacity: 0,
    transform: 'translateY(60px)',
  },
  root_appeared: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

interface IProps extends WithStyles<typeof styles> {
  delay?: number,
  initialDelay?: number,
}

class AnimateList extends React.Component<IProps, any> {

  state = {
    appeared: false,
  };

  private timeout: any;

  render() {
    const {children, delay, initialDelay} = this.props;
    return (
      <>
        {React.Children.map(children, (child, index) =>
        <Animate delay={initialDelay + index * delay}>
          {child}
        </Animate>
        )}
      </>
    );
  }

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({appeared: true}), this.props.delay || 0);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
}

export default withStyles(styles)(AnimateList);
