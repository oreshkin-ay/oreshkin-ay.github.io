import { Binding, useBindingsQuery } from "pages/profile/queries/bindings";

import AddCardSection from "./AddCardSection";
import BindingsCardList from "./List";
import "./PaymentMethods.css";
import ShimmerEffect from "./ShimmerEffect";

const PaymentMethods = () => {
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
  };

  console.log("bindings", bindings);

  return (
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
  );
};

export default PaymentMethods;
