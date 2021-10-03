import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PlanButton from "../atoms/PlanButton";

// styles
const StyledPlan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 19rem;
  width: 15rem;
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
  margin: 0 1rem;
  border-radius: 1rem;
  border: 5px solid rgba(58, 137, 255, 0.2);
  :hover {
    background-color: rgba(41, 89, 160, 0.9);
    border: 5px solid cornflowerblue;
    border-bottom: 5px solid orange;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    h5 {
      color: white;
    }
    span {
      color: white;
      h2 {
        color: #ffc400;
        text-shadow: 2px 2px rgb(0, 21, 138);
      }
    }
    p {
      color: white;
    }
    svg {
      fill: white;
    }
    button {
      background-image: linear-gradient(220deg, #aac9fa 0%, #66a6ff 100%);
    }
  }
  p {
    padding: 0.4rem 0;
  }

  span {
    color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    h2 {
      color: black;
      font-size: 1.4rem;
      margin: 0 0.5rem;
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    svg {
      height: 1rem;
      padding-right: 1rem;
      fill: cornflowerblue;
    }
  }
`;

const StyledTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
`;

const StyledImage = styled.div`
  height: 4rem;
  width: 4rem;
  border: 5px solid rgba(58, 137, 255, 0.2);
  object-fit: contain;
  border-radius: 1rem;
  background-color: white;
  margin-right: 1rem;
  img {
    height: 3.3rem;
    margin: 0 auto;
  }
`;

const StyledRightPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
`;

const PlanOption = ({ plan, buttonText }) => {
  return (
    <StyledPlan>
      <StyledTop>
        <StyledImage>
          <img src={plan.image} alt="" />
        </StyledImage>
        <StyledRightPrice>
          <h5>{plan.option}</h5>

          <span>
            $ <h2>{plan.price}</h2> / month
          </span>
        </StyledRightPrice>
      </StyledTop>
      <section>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10.041 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591zm-5.041-15c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z" />
          </svg>
          <p>{plan.benefitOne}</p>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10.041 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591zm-5.041-15c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z" />
          </svg>
          <p>{plan.benefitTwo}</p>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10.041 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591zm-5.041-15c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z" />
          </svg>
          <p>{plan.benefitThree}</p>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10.041 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591zm-5.041-15c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z" />
          </svg>
          <p>{plan.benefitFour}</p>
        </div>
      </section>
      <PlanButton
        button={{
          type: "submit",
          text: buttonText,
        }}
      />
    </StyledPlan>
  );
};

PlanOption.propTypes = {
  plan: PropTypes.shape({
    image: PropTypes.string.isRequired,
    option: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    benefitOne: PropTypes.string.isRequired,
    benefitTwo: PropTypes.string.isRequired,
    benefitThree: PropTypes.string.isRequired,
    benefitFour: PropTypes.string.isRequired,
  }),
};

export default PlanOption;
