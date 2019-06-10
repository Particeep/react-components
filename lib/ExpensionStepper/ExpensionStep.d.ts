import * as React from 'react';
import { ReactElement } from 'react';
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
interface Props extends ExpensionStepProps {
    readonly className?: string;
    readonly label: string;
    readonly component: ReactElement<any>;
}
declare const _default: React.ComponentType<Props>;
export default _default;
