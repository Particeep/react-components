import { ReactNode } from 'react';
interface Props {
    disabled?: boolean;
    title?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    content?: any;
    children?: ReactNode;
    onConfirm?: () => void;
}
export declare const Confirm: ({ children, title, content, confirmLabel, cancelLabel }: Props) => JSX.Element;
export {};
