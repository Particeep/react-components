import * as React from 'react';
export declare type OrderByType = 'asc' | 'desc';
interface IProps {
    sortBy: string;
    orderBy: OrderByType;
    onSort: (sortBy: string, orderBy: OrderByType) => void;
}
declare class TableSort extends React.Component<IProps, {}> {
    render(): JSX.Element;
    private sort;
}
export default TableSort;
