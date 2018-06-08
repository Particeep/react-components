import * as React from 'react';
import {ReactNode} from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import classNames from 'classnames';

const styles = (t: Theme) => createStyles({
  root: {
    textAlign: 'right',
    margin: `${t.spacing.unit} ${t.spacing.unit / 2} ${t.spacing.unit / 2} 0`,
  }
});

interface AlertActionProps extends WithStyles<typeof styles> {
  children?: ReactNode;
  className?: string;
}

class AlertAction extends React.Component<AlertActionProps, {}> {

  render() {
    const {children, classes, className} = this.props;
    return (
      <div className={classNames(classes.root, className)}>
        {children}
      </div>
    )
  }
}

export default withStyles(styles)(AlertAction);
