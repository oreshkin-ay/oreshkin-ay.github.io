import { useState } from "react";

import { Binding, useBindingsQuery } from "pages/profile/queries/bindings";

import AddCardSection from "./AddCardSection";
import CardModal from "./CardModal";
import BindingsCardList from "./List";
import "./PaymentMethods.css";
import ShimmerEffect from "./ShimmerEffect";

const PaymentMethods = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDefault, setIsDefault] = useState(false);

  const card = {
    type: "MasterCard",
    number: "4390",
  };

  const handleDelete = () => {
    console.log("Card deleted");
    setIsModalOpen(false);
  };

  const handleSetDefault = (value: boolean) => {
    console.log("Set default:", value);
    setIsDefault(value);
  };

  const {
    data: bindings,
    // error: errorBindings,
    isLoading: isLoadingBindings,
    refetch: refetchBindings,
  } = useBindingsQuery({
    userId: "usr_amp",
  });

  const handleCardClick = (card: Binding | string) => {
    console.log("Card clicked:", card);
    setIsModalOpen(true);
  };

  console.log("bindings", bindings);

  return (
    <>
      <div className="profile-info-content">
        <h1 className="page-title">Средства оплаты</h1>
        <div className="content-sections">
          {isLoadingBindings ? (
            <ShimmerEffect />
          ) : !bindings?.length ? (
            <AddCardSection />
          ) : (
            <BindingsCardList cards={bindings} onCardClick={handleCardClick} />
          )}
        </div>
      </div>
      <CardModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        card={card}
        onDelete={handleDelete}
        onSetDefault={handleSetDefault}
        isDefault={isDefault}
      />
    </>
  );
};

export default PaymentMethods;
