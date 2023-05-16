import Input from "./Input";
import React, { useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { setFormValues, submitForm, resetForm } from "../store/form-slice";
const Form = () => {
  const dispatch = useDispatch();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { firstName, lastName, email, isSubmitted } = useSelector(
    (state) => state.form
  );
  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    dispatch(setFormValues({ firstName: value, lastName, email }));
    setButtonDisabled(!value || !lastName || !email);
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    dispatch(setFormValues({ firstName, lastName: value, email }));
    setButtonDisabled(!firstName || !value || !email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    dispatch(setFormValues({ firstName, lastName, email: value }));
    setButtonDisabled(!firstName || !lastName || !value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm());
    dispatch(resetForm());
    setButtonDisabled(true);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Input
        type="text"
        onChange={handleFirstNameChange}
        placeholder="First Name"
        value={firstName}
      />
      <Input
        type="text"
        onChange={handleLastNameChange}
        placeholder="Last Name"
        value={lastName}
      />
      <Input
        type="email"
        onChange={handleEmailChange}
        placeholder="Email"
        value={email}
      />
      <Button
        text="Submit"
        onClick={handleFormSubmit}
        disabled={buttonDisabled || isSubmitted}
      />
    </form>
  );
};
export default Form;
