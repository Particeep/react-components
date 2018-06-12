import * as React from 'react';
import {createStyles, Theme, withStyles} from '@material-ui/core';

const styles = (t: Theme) => createStyles({
  root: {
    maxWidth: 900,
    margin: 'auto',
  }
});

class Page extends React.Component<any, {}> {

  render() {
    const {classes, children} = this.props;
    return (
      <div className={classes.root}>
        {children}
      </div>
    )
  }
}

export default withStyles(styles)(Page);

