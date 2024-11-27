import React from "react";

import { AddCard } from "pages/profile/icons/AddCard";
import { Visa } from "pages/profile/icons/Visa";

import "./CardItem.css";

interface CardItemProps {
  type?: string;
  number?: string;
  //   isDefault: boolean;
  onClick: () => void;
}

const CardItem: React.FC<CardItemProps> = ({
  type,
  number,
  //   isDefault,
  onClick,
}) => {
  return (
    <li
      className="card-item"
      onClick={onClick}
      role="button"
      //   aria-label={`${type} card ending in ${number}  ${isDefault ? "(default)" : ""}`}
    >
      <div className="card-info">
        {type === "VISA" ? <Visa /> : <AddCard />}
        <span className="card-text">
          {type} {number}
        </span>
        {/* {isDefault && <span className="card-default">⭐ По умолчанию</span>} */}
      </div>
      <div className="card-arrow">❯</div>
    </li>
  );
};

export default CardItem;
