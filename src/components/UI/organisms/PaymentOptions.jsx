import React from "react";
import styled from "styled-components";
import PaymentOption from "../molecules/PaymentOption";

// images
import bank from "../../../assets/images/bank.png";
import bitcoin from "../../../assets/images/bitcoin.png";
import card from "../../../assets/images/card.png";
import paypal from "../../../assets/images/paypal.png";

const StyledPaymentOptions = styled.div`
  background-color: white;
  width: 62rem;
  height: 13rem;
  border-radius: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.1) 2rem 2rem 24px;
  color: gray;
  p {
    margin: 0;
    padding: 0;
  }
`;

const StyledPayments = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const PaymentOptions = () => {
  return (
    <StyledPaymentOptions>
      <p>Select your preferred payment method</p>
      <StyledPayments>
        <PaymentOption
          payment={{
            image: card,
            text: "credit card",
          }}
        />
        <PaymentOption
          payment={{
            image: bank,
            text: "internet banking",
          }}
        />
        <PaymentOption
          payment={{
            image: paypal,
            text: "Paypal",
          }}
        />
        <PaymentOption
          payment={{
            image: bitcoin,
            text: "Bitcoin wallet",
          }}
        />
      </StyledPayments>
    </StyledPaymentOptions>
  );
};

export default PaymentOptions;
