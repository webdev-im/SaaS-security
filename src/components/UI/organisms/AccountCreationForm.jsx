import React from "react";
import Input from "../atoms/Input";
import SubmitButton from "../atoms/SubmitButton";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 62rem;
  height: 12rem;
  background-color: white;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0;
  box-shadow: rgba(0, 0, 0, 0.1) 2rem 2rem 24px;
  p {
    margin: 0;
    padding: 0;
    color: gray;
  }
`;

const FormInputs = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const AccountCreationForm = () => {
  return (
    <StyledForm>
      <p>Enter your details below</p>
      <FormInputs>
        <Input
          input={{
            text: "name",
            placeholder: "name",
            id: "name",
          }}
        />
        <Input
          input={{
            text: "email",
            placeholder: "email",
            id: "email",
          }}
        />
        <Input
          input={{
            text: "password",
            placeholder: "password",
            id: "password",
          }}
        />
      </FormInputs>
      <SubmitButton
        button={{
          text: "Submit",
          type: "submit",
        }}
      />
    </StyledForm>
  );
};

export default AccountCreationForm;
