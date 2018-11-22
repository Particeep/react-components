import * as React from 'react';
import {Page, Pick, PickItem} from '../../../lib/index';
import {FormControl, InputLabel} from '@material-ui/core';

class PickDemo extends React.Component<{}, {}> {

  state = {
    value1: ['aa'],
    value2: 'a',
  };

  render() {
    const {value1, value2} = this.state;
    return (
      <Page>
        <FormControl fullWidth>
          <InputLabel>A label</InputLabel>
          <Pick multiple value={value1} onChange={(e: any) => this.setState({value1: e})}>
            <PickItem value="aa">aa</PickItem>
            <PickItem value="bb">bb</PickItem>
            <PickItem value="cc">cc</PickItem>
            <PickItem value="dd">dd</PickItem>
            <PickItem value="ee">ee</PickItem>
            <PickItem value="abc">abc</PickItem>
            <PickItem value="aabbcc">aabbcc</PickItem>
            <PickItem value="aabc">aabc</PickItem>
            <PickItem value="abbc">abbc</PickItem>
          </Pick>
        </FormControl>

        <br/>
        <br/>

        <Pick onChange={(e: any) => this.setState({value2: e})} value={value2}>
          <PickItem value="aabbcc">aabbcc</PickItem>
          <PickItem value="aabc">aabc</PickItem>
          <PickItem value="abbc">abbc</PickItem>
        </Pick>
      </Page>
    )
  }
}

export default PickDemo;
