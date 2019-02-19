import { ReactChild } from 'react';
interface IProps {
    children: ReactChild;
    mobileBreakpoint?: number;
    title?: string;
}
interface LayoutContextProps {
    title?: string;
    isMobileWidth: boolean;
    isMobileSidebarOpened: boolean;
    openMobileSidebar: () => void;
    closeMobileSidebar: () => void;
    toggleMobileSidebar: () => void;
}
export declare const LayoutProvider: ({ title, mobileBreakpoint, children }: IProps) => JSX.Element;
export declare const useLayoutContext: () => LayoutContextProps;
export {};
