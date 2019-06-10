import * as React from 'react';
interface Props {
    readonly format: string;
}
declare class Mask extends React.Component<any, {}> {
    static defaultProps: Partial<Props>;
    render(): JSX.Element;
    private buildMask;
    private replace;
}
export default Mask;
