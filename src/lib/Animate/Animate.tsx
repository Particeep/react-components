import * as React from 'react';
import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core';
import classNames from 'classnames';

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
  children: any,
}

class Animate extends React.Component<IProps, any> {

  state = {
    appeared: false,
  };

  private timeout: any;

  render() {
    const {children, classes} = this.props;
    return React.cloneElement(children, {
      className: classNames(classes.root, this.state.appeared && classes.root_appeared)
    })
  }

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({appeared: true}), this.props.delay || 0);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
}

export default withStyles(styles)(Animate);
