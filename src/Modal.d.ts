import React, { ReactNode } from "react";
type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
    closeButton?: React.ReactNode;
    backdropStyle?: React.CSSProperties;
    modalStyle?: React.CSSProperties;
    closeStyle?: React.CSSProperties;
};
declare const Modal: ({ isOpen, onClose, children, closeButton, backdropStyle, modalStyle, closeStyle, }: ModalProps) => React.JSX.Element;
export default Modal;
