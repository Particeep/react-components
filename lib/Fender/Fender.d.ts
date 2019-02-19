import { ReactChild } from 'react';
declare type State = 'loading' | 'error' | 'empty' | 'success' | 'warning';
interface Props {
    children: ReactChild;
    type?: State;
    icon?: string;
    className?: string;
    style?: object;
}
export declare const Fender: ({ children, icon, type, className, style }: Props) => JSX.Element;
export {};
