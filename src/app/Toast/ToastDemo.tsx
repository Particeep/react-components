import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import {Page} from '../../lib/Page';
import {Btn} from '../../lib/Btn';
import {withToast} from '../../lib/Toast/Toast';


const styles = (t: Theme) => createStyles({});

export interface IToastContext {
  toastError: (m: string) => void;
  toastSuccess: (m: string) => void;
  toastWarning: (m: string) => void;
  toastInfo: (m: string) => void;
}

interface IProps extends IToastContext, WithStyles<typeof styles> {
}

class ToastDemo extends React.Component<IProps, {}> {

  render() {
    const {} = this.props;
    return (
      <Page>
        <Btn color="primary" onClick={this.popError}>Toast</Btn>
      </Page>
    );
  }

  private popError = () => {
    this.props.toastError('Something went wrong !')
  }
}

export default withStyles(styles)(withToast(ToastDemo));
