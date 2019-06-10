import * as React from 'react';
interface IProps {
    delay?: number;
    initialDelay?: number;
}
declare class AnimateList extends React.Component<IProps, any> {
    state: {
        appeared: boolean;
    };
    private timeout;
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
export default AnimateList;
