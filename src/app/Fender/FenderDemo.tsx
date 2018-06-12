import * as React from 'react';
import {Fender, Panel, PanelBody} from '../../lib';
import {Icon, IconButton} from '@material-ui/core';
import {Page} from '../../lib';

class FenderDemo extends React.Component<{}, {}> {

  state = {
    isLoading: false,
  };

  render() {
    return (
      <Page>
        <Panel>
          <PanelBody>
            <Fender type="error">
              Something weng wrong !
            </Fender>
          </PanelBody>
        </Panel>

        <Panel>
          <PanelBody>
            <Fender type="loading">
              Wait a moment please...
            </Fender>
          </PanelBody>
        </Panel>

        <Panel>
          <PanelBody>
            <Fender type="success">
              Everything is ok
            </Fender>
            <Fender type="warning">
              Take care of you
            </Fender>
          </PanelBody>
        </Panel>

        <Fender>
          No more data
        </Fender>
      </Page>
    )
  }

  renderPanelActions = () =>
    <IconButton>
      <Icon>delete</Icon>
    </IconButton>
}

export default FenderDemo;

