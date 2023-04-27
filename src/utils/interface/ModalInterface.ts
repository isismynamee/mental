import { ReactNode } from "react";

export interface ModalInterface{
    isOpen: boolean;
    // setIsOpen: SetIsOpen;
    handleClick: HandleClick;
    children: ReactNode;
    outsideClose: boolean;
    className: string;
    xs: string;
    sm: string;
}