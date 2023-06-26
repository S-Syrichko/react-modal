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

const Modal = ({
  isOpen,
  onClose,
  children,
  closeButton,
  backdropStyle,
  modalStyle,
  closeStyle,
}: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  const defaultCloseButton = <span>X</span>;
  const backdropInlineStyle: React.CSSProperties = backdropStyle
    ? backdropStyle
    : {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 9998,
      };
  const modalInlineStyle: React.CSSProperties = modalStyle
    ? modalStyle
    : {
        position: "relative",
        color: "#000",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        zIndex: 9999,
      };
  const closeInlineStyle: React.CSSProperties = closeStyle
    ? closeStyle
    : {
        position: "absolute",
        top: "10px",
        right: "10px",
        cursor: "pointer",
      };

  return (
    <div className="modal-overlay">
      <div
        className="modal-backdrop"
        style={backdropInlineStyle}
        onClick={onClose}
      ></div>
      <div className="modal" style={modalInlineStyle}>
        <button className="modal-close" style={closeInlineStyle} onClick={onClose}>
          {closeButton ? closeButton : defaultCloseButton}
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
