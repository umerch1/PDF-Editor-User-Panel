import { Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import routs from "../../../utilities/Routs";
import { children } from "./SignInTypes";
import { Auth } from "../../../components";

const SignInComponent = ({
  emailValue,
  setEmailValue,
  passwordValue,
  setPasswordValue,
  isError,
  data,
  submitHandler,
  ToastContainer,
}: children) => {
  return (
    <div>
      {data && <Navigate to={routs.DASHBOARD} />}
      <ToastContainer />
      <form onSubmit={submitHandler}>
        <Auth
          setName={() => "e"}
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

export default SignInComponent;
