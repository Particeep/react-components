import * as React from 'react';
import {Button, CircularProgress, createStyles, Icon, Theme, WithStyles, withStyles} from '@material-ui/core';
import {ButtonProps} from '@material-ui/core/Button/Button';

const styles = (t: Theme) => createStyles({
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  icon: {
    height: 16,
    lineHeight: '16px',
    fontSize: 22,
    marginRight: t.spacing.unit / 2
  }
});

interface Props extends WithStyles<typeof styles> {
  loading?: boolean;
  icon?: string;
}

class Panel extends React.Component<Props & ButtonProps, {}> {

  render() {
    const {loading, classes, children, disabled, icon, ...props} = this.props;
    return (
      <Button {...props} disabled={disabled || loading}>
        {!loading &&
        <>
          {icon && <Icon className={classes.icon}>{icon}</Icon>}
          {children}
        </>
        }
        {loading && <CircularProgress size={24} className={classes.progress}/>}
      </Button>
    )
  }
}

export default withStyles(styles)(Panel);
