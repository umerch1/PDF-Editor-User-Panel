import { useState } from "react";
import { useDispatch } from "react-redux";
import { userDataStore } from "../../../Redux/reducer";
import { ToastContainer, toast } from "react-toastify";
import { useLoginUserMutation } from "../../../Redux/api";
import { SignInTypes } from "./SignInTypes";

function SignInServiceComponent({ children, navigation }: SignInTypes) {
  const dispatch = useDispatch();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loginUser, { isError, data }] = useLoginUserMutation();

  const submitHandler = async (e: any) => {
    e.preventDefault();
    console.log(emailValue, passwordValue);
    const val = {
      email: emailValue,
      password: passwordValue,
    };
    await loginUser(val);
    if (data) {
      dispatch(userDataStore(data));
    }
  };
  if (data) {
    dispatch(userDataStore(data));
  }
  if (data) {
    toast("Login successfully");
  }

  return children({
    navigation,
    emailValue,
    setEmailValue,
    passwordValue,
    setPasswordValue,
    isError,
    data,
    submitHandler,
    ToastContainer,
  });
}

export default SignInServiceComponent;
