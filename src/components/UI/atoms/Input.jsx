import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 15rem;
  height: 2rem;
  outline: none;
  border: none;
  padding-left: 1rem;
  background-color: transparent;
  border-bottom: 1px solid cornflowerblue;
  margin: 0 1rem;
  color: cornflowerblue;
  ::placeholder {
    color: cornflowerblue;
    font-size: 1rem;
    font-weight: 600;
    font-family: "Quicksand", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Input = ({ input }) => {
  return (
    <StyledInput
      type={input.type}
      placeholder={input.placeholder}
      id={input.id}
    ></StyledInput>
  );
};

Input.propTypes = {
  input: PropTypes.shape({
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default Input;
