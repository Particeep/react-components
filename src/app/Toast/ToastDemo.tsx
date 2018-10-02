import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import {Page} from '../../lib/Page';
import {Btn} from '../../lib/Btn';
import {WithToast, withToast} from '../../lib/Toast/Toast';
import autobind from 'autobind-decorator';

const styles = (t: Theme) => createStyles({});

interface IProps extends WithToast, WithStyles<typeof styles> {
}

class ToastDemo extends React.Component<IProps, {}> {

  render() {
    const {} = this.props;
    return (
      <Page>
        <Btn color="primary" onClick={this.popError}>Toast error</Btn>
        <Btn color="primary" onClick={this.popWarning}>Toast Warning</Btn>
        <Btn color="primary" onClick={this.popSuccess}>Toast Success</Btn>
        <Btn color="primary" onClick={this.popInfo}>Toast Info</Btn>
        <Btn color="primary" onClick={this.popLoading}>Toast Loading</Btn>
      </Page>
    );
  }

  @autobind
  private popError() {
    this.props.toastError('Something went wrong !')
  }

  @autobind
  private popWarning() {
    this.props.toastWarning('Something went wrong !')
  }

  @autobind
  private popSuccess() {
    this.props.toastSuccess('Something went wrong !')
  }

  @autobind
  private popInfo() {
    this.props.toastInfo('Something went wrong !')
  }

  @autobind
  private popLoading() {
    this.props.toastLoading('Something went wrong !')
  }
}

export default withStyles(styles)(withToast(ToastDemo));
