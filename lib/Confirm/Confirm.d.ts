import { ReactElement } from 'react';
interface Props {
    disabled?: boolean;
    title?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    content?: any;
    children: ReactElement<any>;
    onConfirm?: () => void;
}
export declare const Confirm: ({ children, title, content, confirmLabel, cancelLabel, onConfirm }: Props) => JSX.Element;
export {};
