import React from "react";
import styled from "styled-components";
import PlanOption from "../molecules/PlanOption";
import geekOne from "../../../assets/images/geekOne.png";
import geekTwo from "../../../assets/images/geekTwo.png";
import geekThree from "../../../assets/images/geekThree.png";

const StyledPlanOptions = styled.div`
  height: 26rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 58rem;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: rgba(0, 0, 0, 0.1) 2rem 2rem 24px;
  border-radius: 2rem;
  color: black;
  padding: 2rem;
  cursor: pointer;
  p {
    color: gray;
  }
`;

const Plans = styled.div`
  display: flex;
`;

const PlanOptions = () => {
  return (
    <StyledPlanOptions>
      <h2>Get started today</h2>
      <p>Choose the right plan and start protecting your devices today</p>
      <Plans>
        <PlanOption
          plan={{
            image: geekOne,
            option: "Starter",
            price: "4.99",
            benefitOne: "protect up to 3 devices",
            benefitTwo: "24/7 support",
            benefitThree: "50GB Cloud Backup",
            benefitFour: "Password Manager",
          }}
          buttonText="Choose Starter"
        />
        <PlanOption
          style={{ filter: "invert(48%)" }}
          plan={{
            image: geekTwo,
            option: "Advanced",
            price: "6.99",
            benefitOne: "protect up to 5 devices",
            benefitTwo: "24/7 support",
            benefitThree: "100GB Cloud Backup",
            benefitFour: "Secure VPN",
          }}
          buttonText="Choose Advanced"
        />
        <PlanOption
          plan={{
            image: geekThree,
            option: "Pro",
            price: "9.99",
            benefitOne: "protect up to 7 devices",
            benefitTwo: "500GB Cloud Backup",
            benefitThree: "Secure VPN",
            benefitFour: "Parental Control",
          }}
          buttonText="Choose Pro"
        />
      </Plans>
    </StyledPlanOptions>
  );
};

export default PlanOptions;
