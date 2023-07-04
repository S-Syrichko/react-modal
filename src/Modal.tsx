import React, { ReactNode, useEffect, useRef } from "react";
import PropTypes from "prop-types";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  closeButton?: React.ReactNode;
  style?: {
    backdrop?:
      | {
          [key: string]: React.CSSProperties[keyof React.CSSProperties];
        }
      | undefined;
    modal?:
      | {
          [key: string]: React.CSSProperties[keyof React.CSSProperties];
        }
      | undefined;
    close?:
      | {
          [key: string]: React.CSSProperties[keyof React.CSSProperties];
        }
      | undefined;
  };
};

const Modal = ({
  isOpen,
  onClose,
  children,
  closeButton,
  style = {},
}: ModalProps) => {
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

  if (!isOpen) {
    return null;
  }

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
    ...style.backdrop,
  };

  const mergedModalStyle: React.CSSProperties = {
    ...defaultStyles.modal,
    ...style.modal,
  };

  const mergedCloseStyle: React.CSSProperties = {
    ...defaultStyles.close,
    ...style.close,
  };

  return (
    <div className="modal-overlay">
      <div
        className="modal-backdrop"
        style={mergedBackdropStyle}
        onClick={onClose}
        role="presentation"
        aria-hidden="true"
      ></div>
      <div
        className="modal"
        style={mergedModalStyle}
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="modal-close"
          style={mergedCloseStyle}
          onClick={onClose}
          ref={firstFocusableElementRef}
          aria-label="Close Modal"
        >
          {closeButton ? closeButton : defaultCloseButton}
        </button>
        <div className="modal-content">{children}</div>
        <button
          className="modal-dummy-button"
          style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
          ref={lastFocusableElementRef}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  closeButton: PropTypes.node,
  style: PropTypes.shape({
    backdrop: PropTypes.object,
    modal: PropTypes.object,
    close: PropTypes.object,
  }),
};

export default Modal;
