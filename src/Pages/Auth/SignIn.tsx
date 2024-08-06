import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useLoginUserMutation } from "../../Redux/api";
import 'react-toastify/dist/ReactToastify.css';
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
  const [loginUser, { isError, data }] = useLoginUserMutation();
  console.log("userData", userData);
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
    toast("Login successfully")
  }
  return (
    <div>
      {data && <Navigate to={routs.DASHBOARD} />}
        <ToastContainer/>
      <form onSubmit={submitHandler}>
        <Auth
          navigate={routs.DASHBOARD}
          titleName="Sign In"
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
