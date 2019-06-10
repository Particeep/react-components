import { ReactNode } from 'react';
interface Props {
    width?: number;
    animated?: boolean;
    className?: any;
    style?: object;
    children: ReactNode;
}
declare const Page: ({ children, width, animated, className, style, }: Props) => JSX.Element;
export default Page;
