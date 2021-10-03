import React from "react";
import styled from "styled-components";
import AccountCreationForm from "../components/UI/organisms/AccountCreationForm";
import CrossSellOptions from "../components/UI/organisms/CrossSellOptions";
import PaymentOptions from "../components/UI/organisms/PaymentOptions";
import PlanOptions from "../components/UI/organisms/PlanOptions";

const StyledCheckout = styled.main`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const CheckoutPage = () => {
  return (
    <StyledCheckout>
      <PlanOptions />
      <PaymentOptions />
      <AccountCreationForm />
      <CrossSellOptions />
    </StyledCheckout>
  );
};
