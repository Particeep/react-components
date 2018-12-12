import * as React from 'react'
import {useState} from 'react'
import {Table, TableBody, TableCell, TableRow} from '@material-ui/core'
import {TableSort, TableSortCell} from 'mui-extension'

const data = [
  {name: 'Alex', age: '29',},
  {name: 'Roger', age: '99',},
  {name: 'Laurette', age: '22',},
  {name: 'Roberto', age: '29',},
]

export const TableSortDemoSimple = () => {

  const [sortBy, setSortBy] = useState('name')
  const [orderBy, setOrderBy] = useState('desc')

  const handleSort = (sortBy, orderBy) => {
    setSortBy(sortBy)
    setOrderBy(orderBy)
  }

  const sortedData = () => {
    return data.sort((a, b) => (a[sortBy] < b[sortBy] ? -1 : 1) * (orderBy === 'asc' ? 1 : -1))
  }

  return (
    <Table>
      <TableSort sortBy={sortBy} orderBy={orderBy} onSort={handleSort}>
        <TableSortCell name="name">Name</TableSortCell>
        <TableSortCell name="age">Age</TableSortCell>
      </TableSort>
      <TableBody>
        {sortedData().map((d, i) =>
          <TableRow key={i}>
            <TableCell>{d.name}</TableCell>
            <TableCell>{d.age}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
