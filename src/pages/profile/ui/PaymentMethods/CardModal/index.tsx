import React from "react";
import Modal from "react-modal";
import "./CardModal.css";

Modal.setAppElement("#root"); // Accessibility

interface GradientModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const CardModal: React.FC<GradientModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="gradient-modal-content"
      overlayClassName="gradient-modal-overlay"
    >
      <button className="gradient-modal-close" onClick={onRequestClose}>
        ✖
      </button>
      <div className="gradient-modal-header">
        <h2>Добавить карту</h2>
      </div>
      <div className="gradient-modal-body">
        {/* Placeholder for the form inside the red square */}
        <div className="form-placeholder">[Form goes here]</div>
      </div>
      <div className="gradient-modal-footer">
        <button className="primary-button">Добавить</button>
        <button className="secondary-button">Отмена</button>
      </div>
    </Modal>
  );
};

export default CardModal;
