import * as React from 'react';
import { ReactElement } from 'react';
import { Theme, WithStyles } from '@material-ui/core';
import { ExpensionStepProps } from './index';
declare const styles: (t: Theme) => Record<never, import("@material-ui/core/styles/withStyles").CSSProperties>;
interface Props extends WithStyles<typeof styles> {
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
