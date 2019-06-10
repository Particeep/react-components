import { ReactNode } from 'react';
interface PanelProps {
    loading?: boolean;
    children?: ReactNode;
    className?: string;
}
export declare const Panel: ({ className, loading, children }: PanelProps) => JSX.Element;
export {};
