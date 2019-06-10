import * as React from 'react';
import { InputProps } from '@material-ui/core/Input';
interface Props extends InputProps {
    format: string;
}
declare class InputDate extends React.Component<Props, {}> {
    render(): JSX.Element;
    private mask;
}
export default InputDate;
