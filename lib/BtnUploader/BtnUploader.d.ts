import * as React from 'react';
import { Theme, WithStyles } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
declare const styles: (t: Theme) => Record<"root" | "error" | "doc" | "doc_i" | "doc_progress" | "docUploading" | "error_i" | "error_reset", import("@material-ui/core/styles/withStyles").CSSProperties>;
interface Document {
    permalink: string;
    name: string;
}
interface Messages {
    loading: string;
    upload: string;
    invalidSize: string;
}
interface Props extends WithStyles<typeof styles>, Pick<ButtonProps, Exclude<keyof ButtonProps, keyof {
    classes: any;
}>> {
    document?: Document;
    msg?: Messages;
    uploading?: boolean;
    maxUploadFileSize?: number;
    onDelete: () => void;
    onUpload: (f: File) => void;
}
declare const _default: React.ComponentType<Props>;
export default _default;
