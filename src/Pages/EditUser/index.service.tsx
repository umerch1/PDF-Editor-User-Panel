import { useState } from "react";
import { EditUserTypes } from "./EditUserTypes";
import { useNavigate } from "react-router-dom";

const EditUserServiceComponent = ({ navigation, children }: EditUserTypes) => {
  let titleName = "Edit User";
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  let isError = false;
  let signUp = false;
  let navigate = useNavigate();

  return children({
    navigation,
    titleName,
    signUp,
    navigate,
    emailValue,
    setEmailValue,
    setPasswordValue,
    passwordValue,
    isError,
  });
};

export default EditUserServiceComponent;
