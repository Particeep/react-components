import { ButtonProps } from '@material-ui/core/Button';
interface Props extends ButtonProps {
    loading?: boolean;
    icon?: string;
    iconAfter?: string;
}
export declare const Btn: ({ loading, children, disabled, icon, iconAfter, ...props }: Props) => JSX.Element;
export {};
