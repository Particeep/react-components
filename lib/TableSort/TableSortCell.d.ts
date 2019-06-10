import * as React from 'react';
import { ReactChild } from 'react';
import { OrderByType } from './TableSort';
export interface ITableSortCellProps {
    name?: string;
    active?: boolean;
    orderBy?: OrderByType;
    onSort?: () => void;
    children: ReactChild;
}
declare class TableSortCell extends React.Component<ITableSortCellProps, {}> {
    render(): JSX.Element;
}
export default TableSortCell;
