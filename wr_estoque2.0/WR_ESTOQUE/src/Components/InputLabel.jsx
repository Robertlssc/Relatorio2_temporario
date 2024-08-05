import React from "react";
import { InputContainer } from "../Styles/Login";

const InputWithLabel = ({
  backgroundImageUrl,
  label,
  name,
  type,
  placeholder,
  register,
  error,
}) => {
  return (
    <InputContainer backgroundImageUrl={backgroundImageUrl}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <div className="error-message">{error.message}</div>}
    </InputContainer>
  );
};

export default InputWithLabel;
