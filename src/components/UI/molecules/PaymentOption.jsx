import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledPayment = styled.div`
  margin: 0.5rem 2rem;
  height: 3rem;
  width: 20rem;
  border-radius: 1rem;
  border: 2px solid rgba(209, 209, 209, 0.9);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #a5a5a5;
  background-color: white;
  padding: 0 1rem;
  cursor: pointer;
  :hover {
    border: 2px solid rgba(93, 145, 233, 0.9);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    background-color: rgba(93, 145, 233, 0.1);
    color: black;
    img {
      background-color: rgba(93, 145, 233, 0.9);
    }
  }
  img {
    height: 1.5rem;
    padding: 0.4rem;
    background-color: rgba(93, 145, 233, 0.3);
    border-radius: 1rem;
  }
  svg {
    fill: cornflowerblue;
    height: 1rem;
  }
`;

const PaymentOption = ({ payment }) => {
  return (
    <StyledPayment>
      <img src={payment.image} alt="" />
      <h4>{payment.text}</h4>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    </StyledPayment>
  );
};

PaymentOption.propTypes = {
  payment: PropTypes.shape({
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default PaymentOption;
