import * as React from 'react';
import {LinearProgress} from '@material-ui/core/es/index';
import {ReactNode} from 'react';
import {Card, createStyles, Theme, withStyles, WithStyles} from '@material-ui/core';


const styles = (t: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },

  loader: {
    marginBottom: -5,
  }
});

interface PanelProps extends WithStyles<typeof styles> {
  isLoading?: boolean;
  children?: ReactNode;
  className?: string;
}

class Panel extends React.Component<PanelProps, {}> {

  render() {
    const {classes} = this.props;
    return (
      <Card className={`${classes.root} ${this.props.className || ''}`}>
        {this.props.isLoading && <LinearProgress className={classes.loader}/>}
        {this.props.children}
      </Card>
    )
  }
}

export default withStyles(styles)(Panel);
