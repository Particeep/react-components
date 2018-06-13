import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import classNames from 'classnames';

const styles = (t: Theme) => createStyles({
  root: {
    transition: t.transitions.create('all'),
    margin: 'auto',
    opacity: 0,
    transform: 'scale(.94)'
  },
  root_appeared: {
    opacity: 1,
    transform: 'scale(1)',
  }
});

interface Props extends WithStyles<typeof styles> {
  width?: number,
  animated?: boolean;
}

class Page extends React.Component<Props, {}> {

  public static defaultProps: Partial<Props> = {
    width: 900,
    animated: true,
  };

  state = {
    appeared: false,
  };

  render() {
    const {classes, children, width} = this.props;
    return (
      <div className={classNames(classes.root, this.state.appeared && classes.root_appeared)}
           style={{maxWidth: width}}>
        {children}
      </div>
    )
  }

  componentDidMount() {
    if (this.props.animated) setTimeout(() => this.setState({appeared: true}));
  }
}

export default withStyles(styles)(Page);

