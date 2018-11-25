import * as React from 'react'
import {Page} from '../../../lib/index'
import {Demo} from '../../shared/Demo'
import preval from 'babel-plugin-preval/macro'
import {Code} from '../../shared/Code/Code'
import {ExpensionStepperDemoTunnel} from './ExpensionStepperDemoTunnel'
import {ExpensionStepperDemoAccordion} from './ExpensionStepperDemoAccordion'

const ExpensionStepperDemo = () => {
  return (
    <Page>
      <h1>ExpensionStepper</h1>
      <p>
        <code>ExpensionStepper</code> is a container dividing content into logical steps. His advantages compared to
        other solutions are that step are containing in their dedicated component. Therefore they are easy to reuse or
        shift.
      </p>
      <p>
        Each step is injected with props granting all the needed informations and actions to interact with the stepper.
        Below the interface defining the injected props:
      </p>
      <Code raw={
        `interface ExpensionStepProps {
  prev: () => void
  next: (data?: any) => void
  goTo: (i: number) => void
  free?: boolean
  index: number
  disabled: boolean
  done: boolean
  isCurrent: boolean
  isLast: boolean
}`}>

      </Code>

      <h2>Tunnel</h2>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./ExpensionStepperDemoTunnel.tsx'), 'utf8')`}
        component={ExpensionStepperDemoTunnel}>
      </Demo>

      <h2>Accordion</h2>
      <p>
        It can also be used as a simple accordion using the props <code>free</code>
      </p>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./ExpensionStepperDemoAccordion.tsx'), 'utf8')`}
        component={ExpensionStepperDemoAccordion}>
      </Demo>
    </Page>
  )
}
export default ExpensionStepperDemo

