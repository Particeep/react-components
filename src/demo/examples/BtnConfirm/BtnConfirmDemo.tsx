import * as React from 'react';
import {Btn, BtnConfirm, Page} from '../../../lib/index';
import {Menu, MenuItem} from '@material-ui/core';

class BtnConfirmDemo extends React.Component<{}, any> {

  state = {
    isLoading: false,
    anchorEl: null,
  };

  render() {
    const {anchorEl} = this.state;

    return (
      <Page>
        <BtnConfirm
          title="Reset settings?"
          content="This will reset your device to its default factory settings."
          onConfirm={this.action}>
          <Btn color="primary" variant="contained" loading={this.state.isLoading}>Reset</Btn>
        </BtnConfirm>

        <Btn onClick={this.handleClick}>
          Open Menu
        </Btn>
        <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={this.handleClose}>
          <BtnConfirm
            title="Reset settings?"
            content={<div>This will reset your device to its <strong>default factory settings.</strong></div>}
            onConfirm={this.handleClose}>
            <MenuItem>Reset</MenuItem>
          </BtnConfirm>
        </Menu>
      </Page>
    )
  }

  action = () => {
    this.setState({isLoading: true});
    setTimeout(() => this.setState({isLoading: false}), 1200);
  };

  handleClick = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };
}

export default BtnConfirmDemo;
