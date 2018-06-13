import * as React from 'react';
import {Page} from '../../lib';
import InputDate from '../../lib/InputDate/InputDate';

class InputDateDemo extends React.Component<{}, {}> {

  render() {
    const style = {marginRight: 16};
    return (
      <Page>
        <InputDate format="dd/mm/yyyy" style={style}/>
        <InputDate format="yyyy-mm-dd" style={style}/>
        <InputDate format="yyyy.mm.dd" style={style}/>
      </Page>
    )
  }
}

export default InputDateDemo;

