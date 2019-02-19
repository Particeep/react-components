import * as React from 'react';
import { Theme, WithStyles } from '@material-ui/core';
declare const styles: (t: Theme) => Record<"menu_head" | "menu_headWithCb" | "menu_input" | "menu_items" | "adornment", import("@material-ui/core/styles/withStyles").CSSProperties>;
interface Props extends WithStyles<typeof styles> {
    multiple?: boolean;
    value?: string[] | string;
    onChange: (value: string[] | string) => void;
    searchLabel?: string;
    readonly?: boolean;
}
declare const _default: React.ComponentType<Props>;
export default _default;
