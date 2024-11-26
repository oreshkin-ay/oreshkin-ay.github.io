import React from "react";

import userCard from "pages/profile/images/Card.png";

import "./AddCardSection.css";

const AddCardSection = () => {
  return (
    <div className="add-card-section">
      <div className="add-card-content">
        <h2 className="add-card-title">
          Добавьте карту, чтобы не вводить данные при покупке
        </h2>
        <button className="add-card-button">Добавить</button>
      </div>
      <div className="add-card-image-wrapper">
        <img src={userCard} alt="Add Card" className="add-card-image" />
      </div>
    </div>
  );
};

export default AddCardSection;
