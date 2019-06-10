import { ReactChild } from 'react';
interface AlertProps {
    type: 'info' | 'error' | 'warning' | 'success';
    icon?: string;
    deletable?: boolean;
    action?: any;
    className?: string;
    children: ReactChild;
}
export declare const Alert: ({ type, children, icon, action, deletable, className }: AlertProps) => JSX.Element;
export {};
