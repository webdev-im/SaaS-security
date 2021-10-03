import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPlanButton = styled.button`
  width: 12rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background-image: linear-gradient(to right, #6a85ff 0%, #439ef3 100%);
  color: white;
  border: none;
  cursor: pointer;
`;

const PlanButton = ({ button }) => {
  return <StyledPlanButton type={button.type}>{button.text}</StyledPlanButton>;
};

PlanButton.propTypes = {
  button: PropTypes.shape({
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default PlanButton;
