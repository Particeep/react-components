import * as React from 'react';
import {Btn, Page} from '../../lib';
import IconBtn from '../../lib/IconBtn/IconBtn';
import {Icon} from '@material-ui/core';

class BtnDemo extends React.Component<{}, any> {

  state = {
    isLoading: false,
  };

  render() {
    return (
      <Page>
        <Btn loading={this.state.isLoading} onClick={this.upload} color="primary">
          Envoyer
        </Btn>
        &nbsp;
        <Btn loading={this.state.isLoading} onClick={this.upload} color="primary"
             variant="raised">
          Envoyer
        </Btn>
        &nbsp;
        <Btn loading={this.state.isLoading} onClick={this.upload} color="secondary"
             variant="raised"
             icon="send">
          Envoyer
        </Btn>

        <div>
          <IconBtn loading={this.state.isLoading} onClick={this.upload}>
            <Icon>send</Icon>
          </IconBtn>
          <IconBtn loading={this.state.isLoading} onClick={this.upload} color="primary">
            <Icon>send</Icon>
          </IconBtn>
        </div>
      </Page>
    )
  }

  upload = () => {
    this.setState({isLoading: true});
    setTimeout(() => this.setState({isLoading: false}), 1000);
  }
}

export default BtnDemo;
