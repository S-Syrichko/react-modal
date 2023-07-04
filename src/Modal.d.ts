import React, { ReactNode } from "react";
import PropTypes from "prop-types";
type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
    closeButton?: React.ReactNode;
    style?: {
        backdrop?: {
            [key: string]: React.CSSProperties[keyof React.CSSProperties];
        } | undefined;
        modal?: {
            [key: string]: React.CSSProperties[keyof React.CSSProperties];
        } | undefined;
        close?: {
            [key: string]: React.CSSProperties[keyof React.CSSProperties];
        } | undefined;
    };
};
declare const Modal: {
    ({ isOpen, onClose, children, closeButton, style, }: ModalProps): React.JSX.Element;
    propTypes: {
        isOpen: PropTypes.Validator<boolean>;
        onClose: PropTypes.Validator<(...args: any[]) => any>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        closeButton: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        style: PropTypes.Requireable<PropTypes.InferProps<{
            backdrop: PropTypes.Requireable<object>;
            modal: PropTypes.Requireable<object>;
            close: PropTypes.Requireable<object>;
        }>>;
    };
};
export default Modal;
