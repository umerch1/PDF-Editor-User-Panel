import { useState } from "react";
import { useDispatch } from "react-redux";
import { userDataStore } from "../../../Redux/reducer";
import { ToastContainer, toast } from "react-toastify";
import { useLoginUserMutation } from "../../../Redux/api";
import { SignInTypes } from "./SignInTypes";
import { Person } from "../../../types";

function SignInServiceComponent({ children, navigation }: SignInTypes) {
  const dispatch = useDispatch();
  const [user, setUser] = useState<Person>({
    name: "",
    email: "",
    password: "",
  });
  const [loginUser, { isError, data }] = useLoginUserMutation();

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const val = {
      email: user?.email,
      password: user?.password,
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
    isError,
    data,
    submitHandler,
    ToastContainer,
    user,
    setUser,
  });
}

export default SignInServiceComponent;
