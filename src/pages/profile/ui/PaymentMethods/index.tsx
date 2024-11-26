import React from "react";

import AddCardSection from "./AddCardSection";
import "./PaymentMethods.css";

const PaymentMethods = () => {
  return (
    <div className="profile-info-content">
      <h1 className="page-title">Средства оплаты</h1>
      <div className="content-sections">
        <AddCardSection />
      </div>
    </div>
  );
};

export default PaymentMethods;
