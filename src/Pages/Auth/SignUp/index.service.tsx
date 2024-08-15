import { useState } from "react";
import { useRegisterUserMutation } from "../../../Redux/api";
import { SignUpTypes } from "./SignUpTypes";
import { Person } from "../../../types";

const SignUpServiceComponent = ({ navigation, children }: SignUpTypes) => {
  const [user, setUser] = useState<Person>({
    name: "",
    email: "",
    password: "",
  });
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
    const val = {
      name: user?.name,
      email: user?.email,
      password: user?.password,
    };

    await registerUser(val);
  };

  return children({
    navigation,
    name,
    setName,
    isError,
    data,
    isSuccess,
    isLoading,
    submitHandler,
    user,
    setUser,
  });
};

export default SignUpServiceComponent;
