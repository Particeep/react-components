import * as React from 'react';
import Btn from '../../lib/Btn/Btn';
import Page from '../Page';

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

      </Page>
    )
  }

  upload = () => {
    this.setState({isLoading: true});
    setTimeout(() => this.setState({isLoading: false}), 1000);
  }
}

export default BtnDemo;
