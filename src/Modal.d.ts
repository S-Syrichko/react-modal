import React, { ReactNode } from "react";
type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
};
declare const Modal: ({ isOpen, onClose, children }: ModalProps) => React.JSX.Element;
export default Modal;
