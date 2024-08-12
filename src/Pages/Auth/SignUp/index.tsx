import Auth from "../../../components/Auth";
import CircularProgressBar from "../../../components/CircularProgressBar";
import { Navigate } from "react-router-dom";
import routs from "../../../utilities/Routs";
import { children } from "./SignUpTypes";

function SignUpComponent({
  emailValue,
  setEmailValue,
  passwordValue,
  setPasswordValue,
  name,
  setName,
  isError,
  isSuccess,
  isLoading,
  submitHandler,
}: children) {
  return (
    <div>
      {isLoading ? (
        <CircularProgressBar />
      ) : (
        <form onSubmit={submitHandler}>
          <Auth
            navigate={routs.DASHBOARD}
            titleName="Sign Up"
            signUp
            name={name}
            setName={setName}
            emailValue={emailValue}
            setEmailValue={setEmailValue}
            passwordValue={passwordValue}
            setPasswordValue={setPasswordValue}
            isError={isError}
          />
        </form>
      )}
      {isSuccess && <Navigate replace to={"/admin/dashboard"} />}
    </div>
  );
}

export default SignUpComponent;
