import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import classNames from 'classnames';

const styles = (t: Theme) => createStyles({
  root: {
    transition: t.transitions.create('all'),
    margin: 'auto',
    opacity: 0,
    transform: 'scale(.94)',
    maxWidth: 900,
  },
  root_appeared: {
    opacity: 1,
    transform: 'scale(1)',
  }
});

interface Props extends WithStyles<typeof styles> {
  width?: number,
  animated?: boolean;
  className?: any;
}

class Page extends React.Component<Props, {}> {

  public static defaultProps: Partial<Props> = {
    animated: true,
  };

  state = {
    appeared: false,
  };

  render() {
    const {classes, children, width, animated, className} = this.props;
    return (
      <div className={classNames(classes.root, (!animated || this.state.appeared) && classes.root_appeared, className)}
           style={width && {maxWidth: width}}>
        {children}
      </div>
    )
  }

  componentDidMount() {
    if (this.props.animated) setTimeout(() => this.setState({appeared: true}));
  }
}

export default withStyles(styles)(Page);

