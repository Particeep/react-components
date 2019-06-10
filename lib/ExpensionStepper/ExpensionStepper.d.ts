import * as React from 'react';
import { ReactElement } from 'react';
import { ExpensionStepProps } from './index';
interface Props {
    readonly position?: number;
    readonly className?: string;
    readonly free?: boolean;
    readonly autoScroll?: boolean;
    readonly onNext?: (index: number, data?: any) => void;
    readonly onEnd?: (data?: any) => void;
    readonly children?: ReactElement<ExpensionStepProps>[];
}
declare const _default: React.ComponentType<Props>;
export default _default;
