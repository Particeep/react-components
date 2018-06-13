import * as React from 'react';
import {ReactNode} from 'react';
import {
  Button,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core';

const styles = (t: Theme) => createStyles({});

interface Props extends WithStyles<typeof styles> {
  disabled?: boolean;
  title?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  content?: any;
  children?: ReactNode;
  onConfirm?: () => void;
}

class BtnConfirm extends React.Component<Props, any> {

  state = {
    open: false,
  };

  render() {
    const {children, title, content, confirmLabel, cancelLabel} = this.props;
    return (
      <>
        {React.cloneElement(children as any, {
          onClick: () => this.setState({open: true})
        })}
        <Dialog open={this.state.open}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>{content}</DialogContent>
          <DialogActions>
            <Button color="primary" onClick={() => this.setState({open: false})}>
              {cancelLabel || 'Cancel'}
            </Button>
            <Button color="primary" onClick={this.confirm}>
              {confirmLabel || 'Confirm'}
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

  confirm = () => {
    this.props.onConfirm();
    this.setState({open: false});
  }
}

export default withStyles(styles)(BtnConfirm);
