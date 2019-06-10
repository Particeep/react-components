import * as React from 'react';
declare type ToastType = 'error' | 'loading' | 'warning' | 'success' | 'info' | undefined;
export interface IToastState {
    type?: ToastType;
    message?: string;
    open: boolean;
}
export interface WithToast {
    toastError: (m: string) => void;
    toastSuccess: (m: string) => void;
    toastWarning: (m: string) => void;
    toastInfo: (m: string) => void;
    toastLoading: (m: string) => void;
}
interface Props {
}
export interface IState extends IToastState, WithToast {
}
declare const _default: React.ComponentType<Props>;
export default _default;
export declare const withToast: (Component: any) => (props: any) => JSX.Element;
