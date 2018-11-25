import * as React from 'react'
import {useState} from 'react'
import {Pick, PickItem} from '../../../lib/index'
import {FormControl, FormHelperText, InputLabel} from '@material-ui/core'

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
  'Modesto',
  'Oxnard',
  'Fontana',
  'Moreno Valley',
  'Glendale',
  'Huntington Beach',
  'Santa Clarita',
  'Garden Grove',
]
export const PickDemoMultiple = () => {
  const [value, seValue] = useState([])
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>City</InputLabel>
        <Pick multiple value={value} onChange={seValue} searchLabel="Search...">
          {cities.map(c => <PickItem key={c} value={c}>{c}</PickItem>)}
        </Pick>
        <FormHelperText><b>JS value: </b>{JSON.stringify(value)}</FormHelperText>
      </FormControl>
    </div>
  )
}
