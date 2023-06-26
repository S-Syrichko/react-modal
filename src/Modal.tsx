import React, { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  closeButton?: React.ReactNode;
  style?: React.CSSProperties;
};

const Modal = ({
  isOpen,
  onClose,
  children,
  closeButton,
  style,
}: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  const defaultCloseButton = <span>X</span>;
  const backdropStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9998,
  };
  const modalStyle = style
    ? style
    : {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        zIndex: 9999,
      };
  const closeStyle: React.CSSProperties = {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
  };

  return (
    <div className="modal-overlay">
      <div
        className="modal-backdrop"
        style={backdropStyle}
        onClick={onClose}
      ></div>
      <div className="modal" style={modalStyle}>
        <button className="modal-close" style={closeStyle} onClick={onClose}>
          {closeButton ? closeButton : defaultCloseButton}
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
