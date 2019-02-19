import * as React from 'react';
import { IProgressState } from './GlobalProgressContext';
interface Props extends IProgressState {
    className?: string;
    style?: object;
    styleProgress?: object;
}
declare const _default: React.ComponentType<Props>;
export default _default;
