/// <reference types="react" />
import { ButtonProps } from '@material-ui/core/Button';
interface Document {
    permalink: string;
    name: string;
}
interface Messages {
    loading: string;
    upload: string;
    invalidSize: string;
}
interface Props extends Pick<ButtonProps, Exclude<keyof ButtonProps, keyof {
    classes: any;
}>> {
    document?: Document;
    msg?: Messages;
    uploading?: boolean;
    maxUploadFileSize?: number;
    onDelete: () => void;
    onUpload: (f: File) => void;
}
export declare const BtnUploader: ({ document, uploading, msg, onUpload, onDelete, maxUploadFileSize, ...other }: Props) => JSX.Element;
export {};
