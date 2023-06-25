import React from "react";
interface ModalProps {
    content: React.ReactNode;
    style?: React.CSSProperties;
    isOpen: boolean;
    onClose?: () => void;
    closeButton?: React.ReactNode;
}
declare const Modal: ({ content, style, isOpen, onClose, closeButton, }: ModalProps) => React.JSX.Element;
export default Modal;
