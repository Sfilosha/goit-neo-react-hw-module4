import React, { forwardRef } from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    position: "absolute",
    top: "20%",
    left: "20%",
    right: "20%",
    bottom: "20%",
    overflow: "hidden",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    background: "transparent",
    border: "0px",
    padding: "0px",
  },
};

function ImageModal({ onClose, isOpen, imageSrc }) {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
    >
      <img className={css.modalImage} src={imageSrc} alt="Hello"></img>
    </Modal>
  );
}

export default ImageModal;
