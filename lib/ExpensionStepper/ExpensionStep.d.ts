import * as React from 'react';
import { ReactElement } from 'react';
import { Theme, WithStyles } from '@material-ui/core';
declare const styles: (t: Theme) => Record<"content" | "root" | "header" | "headerCurrent" | "headerClickable" | "i" | "body", import("@material-ui/core/styles/withStyles").CSSProperties>;
export interface ExpensionStepProps {
    readonly prev?: () => void;
    readonly next?: (data?: any) => void;
    readonly goTo?: (i: number) => void;
    readonly free?: boolean;
    readonly index?: number;
    readonly disabled?: boolean;
    readonly done?: boolean;
    readonly isCurrent?: boolean;
    readonly isLast?: boolean;
    readonly autoScroll?: boolean;
}
interface Props extends ExpensionStepProps, WithStyles<typeof styles> {
    readonly className?: string;
    readonly label: string;
    readonly component: ReactElement<any>;
}
declare const _default: React.ComponentType<Props>;
export default _default;
