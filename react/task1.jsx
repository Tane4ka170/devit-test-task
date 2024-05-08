import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ open, disableGlobalScroll, children }) => {
  const [modalOpen, setModalOpen] = useState(open);

  useEffect(() => {
    setModalOpen(open);
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setModalOpen(false);
      }
    };

    if (disableGlobalScroll && modalOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [disableGlobalScroll, modalOpen]);

  const closeModal = () => {
    setModalOpen(false);
  };

  if (!modalOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        {children}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
