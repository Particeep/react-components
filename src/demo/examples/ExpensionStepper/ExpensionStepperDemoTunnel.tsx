import * as React from 'react'
import {useState} from 'react'
import {Button, FormControl, Switch, TextField, Typography} from '@material-ui/core'
import {Panel} from '../../../lib/Panel/index'
import {ExpensionStep, ExpensionStepper} from '../../../lib/ExpensionStepper/index'

export const ExpensionStepperDemoTunnel = () => {
  const [msg, setMsg] = useState(undefined)
  const [autoScroll, setAutoScroll] = useState(true)
  return (
    <>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8}}>
        <div>
          <Typography variant="body2">Autoscroll</Typography>
          <Typography variant="body1">Enable auto scroll on step change. Useful on really long steps.</Typography>
        </div>
        <Switch value={autoScroll} onChange={(e, c) => setAutoScroll(c)}/>
      </div>

      <Typography paragraph>{msg}</Typography>

      <Panel>
        <ExpensionStepper
          autoScroll={autoScroll}
          onEnd={(data) => alert('Stepper done !')}
          onNext={(i, data) => setMsg(`Step ${i} done and said: ${data}`)}>
          <ExpensionStep label="Step 1" component={<Step1/>}/>
          <ExpensionStep label="Step 2" component={<Step2/>}/>
          <ExpensionStep label="Step 2 again" component={<Step2/>}/>
        </ExpensionStepper>
      </Panel>
    </>
  )
}

const Step1 = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  return (
    <>
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
      <Actions {...props} canNext={lastName && firstName} data={firstName + ' ' + lastName}/>
    </>
  )
}

const Step2 = (props) => {
  const [birthDate, setBirthDate] = useState('')
  return (
    <>
      <FormControl style={{marginRight: 8}}>
        <TextField
          label="Birthday"
          value={birthDate}
          onChange={e => setBirthDate(e.target.value)}
          error={!birthDate}
        />
      </FormControl>
      <Actions {...props} canNext={!!birthDate} data={birthDate}/>
    </>
  )
}

const Actions = ({index, isLast, prev, next, canNext, data}) => {
  const onClick = () => next(data)
  return (
    <div style={{marginTop: 24, textAlign: 'right'}}>
      {index > 0 && <Button color="primary" onClick={prev}>Previous</Button>}
      <Button color="primary" onClick={onClick} disabled={!canNext}>{isLast ? 'End' : 'Next'}</Button>
    </div>
  )
}

