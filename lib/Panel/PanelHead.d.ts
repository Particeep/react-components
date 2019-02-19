import { ReactNode } from 'react';
interface PanelHeadProps {
    icon?: string;
    children?: ReactNode;
    action?: any;
    className?: string;
}
export declare const PanelHead: ({ className, icon, children, action }: PanelHeadProps) => JSX.Element;
export {};
