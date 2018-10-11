import * as React from 'react'
import {
  createStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core'
import {Page} from '../../lib/Page'
import {Btn} from '../../lib/Btn'
import {WithToast, withToast} from '../../lib/Toast/Toast'
import autobind from 'autobind-decorator'
import {TableSort, TableSortCell} from '../../lib/TableSort'
import {OrderByType} from '../../lib/TableSort/TableSort'

const styles = (t: Theme) => createStyles({})

interface IProps extends WithToast, WithStyles<typeof styles> {
}

interface IState {
  sortBy: string,
  orderBy: OrderByType,
}

const data = [
  {
    name: 'Alex',
    age: '29',
  },
  {
    name: 'Roger',
    age: '99',
  },
  {
    name: 'Laurette',
    age: '22',
  },
  {
    name: 'Roberto',
    age: '29',
  },
]

class TableSortDemo extends React.Component<IProps, IState> {

  state = {
    sortBy: 'name',
    orderBy: 'desc' as OrderByType,
  }

  render() {
    const {sortBy, orderBy} = this.state
    return (
      <Page>
        <Table>
          <TableSort sortBy={sortBy} orderBy={orderBy as OrderByType} onSort={this.handleSort}>
            <TableSortCell name="name">
              Name
            </TableSortCell>
            <TableSortCell name="age">
              Age
            </TableSortCell>
          </TableSort>
          <TableBody>
            {this.sortedData().map((d, i) =>
              <TableRow key={i}>
                <TableCell>{d.name}</TableCell>
                <TableCell>{d.age}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Page>
    )
  }

  @autobind
  private handleSort(sortBy: string, orderBy: OrderByType) {
    this.setState({sortBy, orderBy})
  }

  private sortedData(): any[] {
    const {sortBy, orderBy} = this.state
    return data.sort((a, b) => (a[sortBy] < b[sortBy] ? -1 : 1) * (orderBy === 'asc' ? 1 : -1))
  }
}

export default withStyles(styles)(withToast(TableSortDemo))
