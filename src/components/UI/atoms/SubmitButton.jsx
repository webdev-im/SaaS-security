import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSubmitButton = styled.button`
  width: 12rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background-image: linear-gradient(to right, #6a85ff 0%, #439ef3 100%);
  color: white;
  border: none;
  cursor: pointer;
  :hover {
    background-image: linear-gradient(220deg, #89b6fe 0%, #66a6ff 100%);
  }
`;

const SubmitButton = ({ button }) => {
  return (
    <StyledSubmitButton type={button.type}>{button.text}</StyledSubmitButton>
  );
};

SubmitButton.propTypes = {
  button: PropTypes.shape({
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default SubmitButton;
