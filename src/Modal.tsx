import React from "react";

interface ModalProps {
  content: React.ReactNode;
  style?: React.CSSProperties;
  isOpen: boolean;
  onClose?: () => void;
  closeButton?: React.ReactNode;
}

const Modal = ({
  content,
  style,
  isOpen,
  onClose,
  closeButton,
}: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  const defaultCloseButton = <span>X</span>;
  const modalStyle = style
    ? style
    : {
        top: "40px",
        left: "40px",
        right: "40px",
        bottom: "40px",
        border: "1px solid #ccc",
        background: "#fff",
        overflow: "auto",
        borderRadius: "4px",
        outline: "none",
        padding: "20px",
      };

  return (
    <div className="modal" style={modalStyle}>
      <div className="close-button" onClick={onClose}>
        {closeButton ? closeButton : defaultCloseButton}
      </div>
      {content}
    </div>
  );
};

export default Modal;
