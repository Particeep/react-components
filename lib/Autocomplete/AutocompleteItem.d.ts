import * as React from 'react';
import { ReactNode } from 'react';
export interface AutocompleteItemProps {
    multiple?: boolean;
    disabled?: boolean;
    checked?: boolean;
    value: string;
    children?: ReactNode;
    onClick?: (value: string) => void;
}
declare class AutocompleteItem extends React.Component<AutocompleteItemProps, {}> {
    render(): JSX.Element;
}
export default AutocompleteItem;
