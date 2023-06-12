import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

export default function LoginPageInputs({
  email,
  setMail,
  password,
  setPassword,
}) {
  return (
    <>
      <InputWithLabel
        value={email}
        setValue={setMail}
        label="Email"
        type="text"
        placeholder="Example@email.com"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter Password"
      />
    </>
  );
}
