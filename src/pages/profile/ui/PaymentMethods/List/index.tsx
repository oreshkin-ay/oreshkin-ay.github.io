import React from "react";

import { Binding } from "pages/profile/queries/bindings";

import "./BindingsCardList.css";
import CardItem from "./CardItem";

interface BindingsCardListProps {
  cards?: Binding[];
  onCardClick: (card: Binding | string) => void;
}

const BindingsCardList: React.FC<BindingsCardListProps> = ({
  cards,
  onCardClick,
}) => {
  return (
    <ul className="card-list">
      {cards?.map((card, index) => (
        <CardItem
          key={index}
          type={card.meta.paymentSystem}
          number={`·· ${card.meta.maskedPan?.slice(card.meta.maskedPan?.length - 4)}`}
          // isDefault={card.isDefault}
          onClick={() => onCardClick(card)}
        />
      ))}

      <CardItem
        key={"new_card"}
        // type={card.meta.paymentSystem}
        number={"Добавить карту"}
        // isDefault={card.isDefault}
        onClick={() => onCardClick("new_card")}
      />
    </ul>
  );
};

export default BindingsCardList;
