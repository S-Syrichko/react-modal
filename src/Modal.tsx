import React, { ReactNode, useEffect, useRef } from "react";

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

  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusableElementRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusableElementRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        if (
          document.activeElement === lastFocusableElementRef.current &&
          !event.shiftKey
        ) {
          event.preventDefault();
          firstFocusableElementRef.current?.focus();
        } else if (
          document.activeElement === firstFocusableElementRef.current &&
          event.shiftKey
        ) {
          event.preventDefault();
          lastFocusableElementRef.current?.focus();
        }
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscKey);
      window.addEventListener("keydown", handleTabKey);

      firstFocusableElementRef.current?.focus();
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey);
      window.removeEventListener("keydown", handleTabKey);
    };
  }, [isOpen]);

  const defaultCloseButton = <span>X</span>;
  const defaultStyles: {
    backdrop: React.CSSProperties;
    modal: React.CSSProperties;
    close: React.CSSProperties;
  } = {
    backdrop: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 9998,
    },
    modal: {
      position: "relative",
      color: "#000",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      zIndex: 9999,
    },
    close: {
      position: "absolute",
      top: "10px",
      right: "10px",
      cursor: "pointer",
    },
  };

  const mergedBackdropStyle: React.CSSProperties = {
    ...defaultStyles.backdrop,
    ...backdropStyle,
  };

  const mergedModalStyle: React.CSSProperties = {
    ...defaultStyles.modal,
    ...modalStyle,
  };

  const mergedCloseStyle: React.CSSProperties = {
    ...defaultStyles.close,
    ...closeStyle,
  };

  return (
    <div className="modal-overlay">
      <div
        className="modal-backdrop"
        style={mergedBackdropStyle}
        onClick={onClose}
      ></div>
      <div
        className="modal"
        style={mergedModalStyle}
        ref={modalRef}
        tabIndex={-1}
      >
        <button
          className="modal-close"
          style={mergedCloseStyle}
          onClick={onClose}
          ref={firstFocusableElementRef}
        >
          {closeButton ? closeButton : defaultCloseButton}
        </button>
        <div className="modal-content">{children}</div>
        <button
          className="modal-dummy-button"
          style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
          ref={lastFocusableElementRef}
        />
      </div>
    </div>
  );
};

export default Modal;
