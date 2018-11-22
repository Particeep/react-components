import * as React from 'react';
import {Alert, Page, Panel, PanelBody, PanelHead} from '../../../lib/index';
import {Button} from '@material-ui/core';

class AlertDemo extends React.Component<{}, any> {

  state = {
    isLoading: false,
  };

  render() {
    return (
      <Page>
        <Alert type="warning">
          Quelque chose ne va pas.
        </Alert>

        <br/>

        <Panel>
          <Alert type="error" action={
            <Button color="primary">Aller mieux !</Button>
          }>
            Quelque chose ne va vraiment pas.
            Quelque chose ne va vraiment pas.
            Quelque chose ne va vraiment pas.
            Quelque chose ne va vraiment pas.
            Quelque chose ne va vraiment pas.
            Quelque chose ne va vraiment pas.
            Quelque chose ne va vraiment pas.
            Quelque chose ne va vraiment pas.
            Quelque chose ne va vraiment pas.
            Quelque chose ne va vraiment pas.
          </Alert>
        </Panel>

        <Panel>
          <PanelHead icon="music_note">
            Pouloulou
          </PanelHead>
          <Alert type="info">
            Tout va bien
          </Alert>
          <PanelBody>
            Material icons are delightful, beautifully crafted symbols for common actions and items. Download on desktop
            to use them in your digital products for Android, iOS, and web.

            Each symbol is available in five themes and a range of downloadable sizes and densities.

            <br/>
            <br/>

            <Alert type="success" icon="battery_full" deletable>
              Vous allez mieux
            </Alert>
          </PanelBody>
        </Panel>
      </Page>
    )
  }

  upload = () => {
    this.setState({isLoading: true});
    setTimeout(() => this.setState({isLoading: false}), 1000);
  }
}

export default AlertDemo;
