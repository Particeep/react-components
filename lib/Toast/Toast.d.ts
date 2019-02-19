import * as React from 'react';
import { Theme, WithStyles } from '@material-ui/core';
declare const styles: (t: Theme) => Record<"label" | "iError" | "iSuccess" | "iWarning" | "iInfo", import("@material-ui/core/styles/withStyles").CSSProperties>;
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
interface IProps extends WithStyles<typeof styles> {
}
export interface IState extends IToastState, WithToast {
}
declare class ToastProvider extends React.Component<IProps, IState> {
    state: {
        type: any;
        message: any;
        open: boolean;
        toastError: (message: string) => void;
        toastSuccess: (message: string) => void;
        toastWarning: (message: string) => void;
        toastInfo: (message: string) => void;
        toastLoading: (message: string) => void;
    };
    render(): JSX.Element;
    private renderIcon;
    private pop;
    private popError;
    private popSuccess;
    private popWarning;
    private popInfo;
    private popLoading;
    private close;
}
export default ToastProvider;
export declare const withToast: (Component: any) => (props: any) => JSX.Element;
