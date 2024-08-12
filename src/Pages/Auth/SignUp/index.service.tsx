import { useState } from "react";
import { useRegisterUserMutation } from "../../../Redux/api";
import { SignUpTypes } from "./SignUpTypes";

const SignUpServiceComponent = ({ navigation, children }: SignUpTypes) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [name, setName] = useState("");
  const [registerUser, { isError, data, isLoading, isSuccess }] =
    useRegisterUserMutation();

  if (isSuccess) {
    console.log("SuccessFully");
    //  <Navigate replace to={'/dashboard'} />
  }
  if (data) {
    console.log("Successfuly register your account");
  }
  console.log(isError);
  const submitHandler = async (e: any) => {
    e.preventDefault();
    console.log(emailValue, passwordValue, name);
    const val = {
      name: name,
      email: emailValue,
      password: passwordValue,
    };

    await registerUser(val);
  };

  return children({
    navigation,
    emailValue,
    setEmailValue,
    passwordValue,
    setPasswordValue,
    name,
    setName,
    isError,
    data,
    isSuccess,
    isLoading,
    submitHandler,
  });
};

export default SignUpServiceComponent;
