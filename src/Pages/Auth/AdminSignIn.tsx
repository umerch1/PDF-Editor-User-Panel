import { Navigate } from "react-router-dom";
import { useLoginAdminMutation } from "../../Redux/api";
import Auth from "../../components/Auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userDataStore } from "../../Redux/reducer";
import { userData } from "../../Redux/reducer";
import routs from "../../utilities/Routs";
const SignIn = () => {
  const dispatch = useDispatch();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loginUser, { isError, data }] = useLoginAdminMutation();
  console.log("userData", userData);
  const submitHandler = async (e: any) => {
    e.preventDefault();
    console.log(emailValue, passwordValue);
    const val = {
      email: emailValue,
      password: passwordValue,
      admin:true
    };

    await loginUser(val);
    if (data) {
      dispatch(userDataStore(data));
    }
  };
  if (data) {
    dispatch(userDataStore(data));
  }
  return (
    <div>
      {data && <Navigate to={routs.DASHBOARD} />}
      <form onSubmit={submitHandler}>
        <Auth
          navigate={routs.DASHBOARD}
          titleName="Admin SignIn"
          emailValue={emailValue}
          setEmailValue={setEmailValue}
          passwordValue={passwordValue}
          setPasswordValue={setPasswordValue}
          isError={isError}
        />
      </form>
    </div>
  );
};

export default SignIn;
