import * as React from 'react';
import {Panel, PanelBody, PanelFoot, PanelHead} from '../../lib/Panel';
import {Button, Icon, IconButton} from '@material-ui/core';

class PanelDemo extends React.Component<{}, {}> {

  state = {
    isLoading: false,
  };

  render() {
    return (
      <Panel isLoading={this.state.isLoading}>
        <PanelHead icon="person" action={this.renderPanelActions()}>
          Lizards
        </PanelHead>
        <PanelBody>
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
          except Antarctica
        </PanelBody>
        <PanelFoot>
          <Button size="small" color="primary" variant="raised"
                  onClick={() => this.setState({isLoading: !this.state.isLoading})}>
            Toggle Loading
          </Button>
          <Button size="small" color="primary">
            Learn more
          </Button>
        </PanelFoot>
      </Panel>
    )
  }

  renderPanelActions = () =>
    <IconButton>
      <Icon>delete</Icon>
    </IconButton>
}

export default PanelDemo;
