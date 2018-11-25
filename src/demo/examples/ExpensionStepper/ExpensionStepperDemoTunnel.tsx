import * as React from 'react'
import {useState} from 'react'
import {Button, FormControl, TextField} from '@material-ui/core'
import {Panel} from '../../../lib/Panel/index'
import {ExpensionStep, ExpensionStepper} from '../../../lib/ExpensionStepper/index'

export const ExpensionStepperDemoTunnel = () => {
  return (
    <Panel>
      <ExpensionStepper
        onEnd={(data) => {
          console.log(`Final step done and say: ${data}`)
          alert('Gratz !')
        }}
        onNext={(i, data) => console.log(`Step ${i} done and say:`, data)}>
        <ExpensionStep label="Step 1" component={<Step1/>}/>
        <ExpensionStep label="Step 2" component={<Step2/>}/>
        <ExpensionStep label="Step 2 again" component={<Step2/>}/>
      </ExpensionStepper>
    </Panel>
  )
}

const Step1 = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  return (
    <div>
      <FormControl style={{marginRight: 8}}>
        <TextField
          label="First name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          error={!firstName}
        />
      </FormControl>
      <FormControl>
        <TextField
          label="Last name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          error={!lastName}
        />
      </FormControl>
      <Actions {...props} canNext={lastName && firstName}/>
    </div>
  )
}

const Step2 = (props) => {
  const [birthDate, setBirthDate] = useState('')
  return (
    <div>
      <FormControl style={{marginRight: 8}}>
        <TextField
          label="Birthday"
          value={birthDate}
          onChange={e => setBirthDate(e.target.value)}
          error={!birthDate}
        />
      </FormControl>
      <Actions {...props} canNext={!!birthDate}/>
    </div>
  )
}

const Actions = ({index, isLast, prev, next, canNext}) => {
  const onClick = () => next('some data to pass to onNext() callback')
  return (
    <div style={{marginTop: 24, textAlign: 'right'}}>
      {index > 0 && <Button color="primary" onClick={prev}>Previous</Button>}
      {!isLast && <Button color="primary" onClick={onClick} disabled={!canNext}>Next</Button>}
    </div>
  )
}

