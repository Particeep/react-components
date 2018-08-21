import * as React from 'react';
import {ReactNode} from 'react';
import {LinearProgress} from '@material-ui/core/es/index';
import {Card, createStyles, Theme, withStyles, WithStyles} from '@material-ui/core';


const styles = (t: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: t.spacing.unit * 2,
  },

  loader: {
    marginBottom: -5,
  },

});

interface PanelProps extends WithStyles<typeof styles> {
  loading?: boolean;
  children?: ReactNode;
  className?: string;
}

class Panel extends React.Component<PanelProps, {}> {

  render() {
    const {classes} = this.props;
    return (
      <Card className={`${classes.root} ${this.props.className || ''}`}>
        {this.props.loading && <LinearProgress className={classes.loader}/>}
        {this.props.children}
      </Card>
    )
  }
}

export default withStyles(styles)(Panel);
