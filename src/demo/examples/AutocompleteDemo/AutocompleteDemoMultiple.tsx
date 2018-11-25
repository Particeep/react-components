import * as React from 'react'
import {useState} from 'react'
import {FormControl, FormHelperText, Input, InputLabel} from '@material-ui/core'
import {Autocomplete, AutocompleteItem} from '../../../lib/Autocomplete'

const cities = [
  'Los Angeles',
  'San Diego',
  'San Jose',
  'San Francisco',
  'Fresno',
  'Sacramento',
  'Long Beach',
  'Oakland',
  'Bakersfield',
  'Anaheim',
  'Santa Ana',
  'Riverside',
  'Stockton',
  'Chula Vista',
  'Fremont',
  'Irvine',
  'San Bernardino',
]

export const AutocompleteDemoMultiple = () => {
  const [value, seValue] = useState([])
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>City</InputLabel>
        <Autocomplete multiple value={value} onChange={seValue} searchLabel="Search..." multiline rows="1" rowsMax="10">
          {cities.map(c => <AutocompleteItem key={c} value={c}>{c}</AutocompleteItem>)}
        </Autocomplete>
        <FormHelperText><b>JS value: </b>{JSON.stringify(value)}</FormHelperText>
      </FormControl>
    </div>
  )
}
