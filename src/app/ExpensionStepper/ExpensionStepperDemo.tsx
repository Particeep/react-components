import * as React from 'react';
import {Page} from '../../lib';
import {Button, FormControl, TextField} from '@material-ui/core';
import {Panel} from '../../lib/Panel';
import {ExpensionStep, ExpensionStepper} from '../../lib/ExpensionStepper';

class ExpensionStepperDemo extends React.Component<{}, {}> {

  render() {
    return (
      <Page>
        <Panel>
          <ExpensionStepper onEnd={() => alert('Gratz !')}>
            <ExpensionStep label="Step 1" component={<Step1/>}/>
            <ExpensionStep label="Step 2" component={<Step2/>}/>
          </ExpensionStepper>
        </Panel>
      </Page>
    )
  }
}

class Step1 extends React.Component<any, any> {

  state = {
    firstName: '',
    lastName: '',
  };

  render() {
    const {firstName, lastName} = this.state;
    return (
      <div>
        <FormControl style={{marginRight: 8}}>
          <TextField
            label="First name"
            value={firstName}
            onChange={e => this.setState({firstName: e.target.value})}
            error={!firstName}
          />
        </FormControl>
        <FormControl>
          <TextField
            label="Last name"
            value={lastName}
            onChange={e => this.setState({lastName: e.target.value})}
            error={!lastName}
          />
        </FormControl>
        <Actions {...this.props} canNext={lastName && firstName}/>
      </div>
    );
  }
}

class Step2 extends React.Component<any, any> {

  state = {
    birthDate: '',
  };

  render() {
    const {birthDate} = this.state;
    return (
      <div>
        <FormControl style={{marginRight: 8}}>
          <TextField
            label="Birthday"
            value={birthDate}
            onChange={e => this.setState({birthDate: e.target.value})}
            error={!birthDate}
          />
        </FormControl>
        <Actions {...this.props} canNext={birthDate}/>
      </div>
    );
  }
}

const Actions = (props: any) =>
  <div style={{marginTop: 24, textAlign: 'right'}}>
    {props.index > 0 && <Button color="primary" onClick={props.prev}>Previous</Button>}
    <Button color="primary" onClick={props.next} disabled={!props.canNext}>Next</Button>
  </div>
;

export default ExpensionStepperDemo;

