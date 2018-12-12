import * as React from 'react'
import InputDate from '../../../lib/InputDate/InputDate'
import {FormControl, FormHelperText, InputLabel} from '@material-ui/core'

export const InputDateDemoCustom = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <FormControl>
        <InputLabel htmlFor="formatted-text-mask-input">Birthdate</InputLabel>
        <InputDate format="dd/mm/yyyy" value="11/12/1991"/>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  )
}
