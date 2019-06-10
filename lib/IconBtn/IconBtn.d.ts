import { ReactChild } from 'react';
import { IconButtonProps } from '@material-ui/core/IconButton';
interface Props extends IconButtonProps {
    loading?: boolean;
    icon?: string;
    children: ReactChild;
}
export declare const IconBtn: ({ icon, loading, children, disabled, ...props }: Props) => JSX.Element;
export {};
