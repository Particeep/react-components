import { ReactChild, ReactNode } from 'react';
export declare const sidebarWith = 220;
interface IProps {
    title?: string;
    children?: ReactChild;
    mobileBreakpoint?: number;
    sidebar?: ReactNode;
}
export declare const Layout: ({ title, mobileBreakpoint, children, sidebar }: IProps) => JSX.Element;
export {};
