import * as React from 'react'
import {ReactNode} from 'react'
import {TableCell, TableSortLabel} from '@material-ui/core'
import {OrderByType} from './TableSort'

export interface ITableSortCellProps {
  name?: string;
  active?: boolean;
  orderBy?: OrderByType;
  onSort?: () => void;
  children: ReactNode;
}

class TableSortCell extends React.Component<ITableSortCellProps, {}> {

  render() {
    const {name, active, orderBy, onSort, children} = this.props
    return (
      <TableCell sortDirection={false}>
        {name ? (
          <TableSortLabel
            active={active}
            direction={orderBy}
            onClick={onSort}
          >{children}</TableSortLabel>
        ) : (
          children
        )}
      </TableCell>
    )
  }
}

export default TableSortCell

