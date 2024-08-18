import { FormEvent, useState } from "react";
import { ForgetPassTypes, userType } from "./ForgetPassTypes";
import { useResetPasswordMutation } from "../../../Redux/api";

const ForgetPassServiceComp = ({ navigation, children }: ForgetPassTypes) => {
  const [user, setUser] = useState<userType>({
    email: "",
    newPass: "",
    confirmPass: "",
    errorMess: "",
    open: false,
  });

  const [resetPassword, { isError, data, isSuccess }] =
    useResetPasswordMutation();
  // Form Submit Funcion
  const submitHandler = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (user.confirmPass == user.newPass) {
      const val = {
        email: user.email,
        password: user.newPass,
      };
      await resetPassword(val);
      setUser({
        email: "",
        newPass: "",
        confirmPass: "",
        errorMess: "",
        open: true,
      });
    } else {
      setUser((prev) => ({ ...prev, errorMess: "Passwords do NOT match" }));
    }
  };
  return children({
    navigation,
    user,
    setUser,
    submitHandler,
    isError,
    data,
    isSuccess,
  });
};

export default ForgetPassServiceComp;
