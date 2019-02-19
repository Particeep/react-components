import * as React from 'react';
export declare const GlobalProgressContext: React.Context<{}>;
export declare const progressbarAnimationDuration = 400;
export interface IProgressState {
    currentStep: number;
    steps: number;
    started: boolean;
}
interface IProps {
}
export interface WithProgress {
    readonly progressStart: (steps?: number) => void;
    readonly progressStop: () => void;
    readonly progressComplete: () => void;
    readonly progressNext: () => void;
    readonly promisesWithProgress: (...promises: Promise<any>[]) => void;
}
export interface IState extends IProgressState, WithProgress {
}
declare class GlobalProgressProvider extends React.Component<IProps, IState> {
    private timeouts;
    state: {
        currentStep: number;
        steps: number;
        started: boolean;
        progressStart: (steps?: number) => void;
        progressStop: () => void;
        progressComplete: () => void;
        progressNext: () => void;
        promisesWithProgress: (...promises: Promise<any>[]) => void;
    };
    render(): JSX.Element;
    componentWillUnmount(): void;
    private start;
    private promisesWithProgress;
    private stop;
    private complete;
    private next;
    private stopHandlingAnimation;
    private setTimeout;
    private clearTimeouts;
}
export default GlobalProgressProvider;
export declare const withGlobalProgress: (Component: any) => (props: any) => JSX.Element;
