import { HTMLProps, ReactChild } from 'react';
interface IProps extends HTMLProps<any> {
    icon?: string | ReactChild;
    to?: any;
    href?: any;
    className?: any;
    large?: boolean;
}
export declare const SidebarItem: ({ href, to, children, icon, className, large, ...other }: IProps) => JSX.Element;
export {};
