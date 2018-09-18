import * as React from 'react';
import {CircularProgress, createStyles, IconButton, Theme, WithStyles, withStyles} from '@material-ui/core';
import {ButtonProps} from '@material-ui/core/Button/Button';

const styles = (t: Theme) => createStyles({
});

interface Props extends WithStyles<typeof styles> {
  loading?: boolean;
}

class IconBtn extends React.Component<Props & ButtonProps, {}> {

  render() {
    const {loading, classes, children, disabled, ...props} = this.props;
    return (
      <IconButton {...props} disabled={disabled || loading}>
        {loading ? <CircularProgress size={24}/> : children}
      </IconButton>
    )
  }
}

export default withStyles(styles)(IconBtn);
