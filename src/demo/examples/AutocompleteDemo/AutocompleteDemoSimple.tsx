import * as React from 'react'
import {useState} from 'react'
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

export const AutocompleteDemoSimple = () => {
  const [value, setValue] = useState([])
  return (
    <div style={{textAlign: 'center'}}>
      <Autocomplete onChange={setValue} value={value} searchLabel="Search...">
          {cities.map(c => <AutocompleteItem key={c} value={c}>{c}</AutocompleteItem>)}
      </Autocomplete>
    </div>
  )
}
