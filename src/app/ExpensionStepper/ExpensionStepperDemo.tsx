import * as React from 'react';
import Page from '../Page';
import ExpensionStepper from '../../lib/ExpensionStepper/ExpensionStepper';
import {Button} from '@material-ui/core';
import {Panel} from '../../lib/Panel';
import ExpensionStep from '../../lib/ExpensionStepper/ExpensionStep';

class ExpensionStepperDemo extends React.Component<{}, {}> {

  render() {
    return (
      <Page>
        <Panel>
          <ExpensionStepper>
            <ExpensionStep label="Step 1" component={<Step1/>}/>
            <ExpensionStep label="Step 1" component={<Step1/>}/>
            <ExpensionStep label="Step 1" component={<Step1/>}/>
          </ExpensionStepper>
        </Panel>
      </Page>
    )
  }
}

const Step1 = (props: any) => (
  <div>
    <div>SomethingIn</div>
    <Button color="primary" onClick={props.prev} disabled={props.index === 0}>Previous</Button>
    <Button color="primary" onClick={props.next}>Next</Button>
  </div>
);

export default ExpensionStepperDemo;

