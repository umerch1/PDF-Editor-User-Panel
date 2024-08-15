import Auth from "../../../components/Auth";
import CircularProgressBar from "../../../components/CircularProgressBar";
import { Navigate } from "react-router-dom";
import routs from "../../../utilities/Routs";
import { children } from "./SignUpTypes";

function SignUpComponent({
  isError,
  isSuccess,
  isLoading,
  submitHandler,
  user,
  setUser,
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
            user={user}
            setUser={setUser}
            isError={isError}
          />
        </form>
      )}
      {isSuccess && <Navigate replace to={routs.DASHBOARD} />}
    </div>
  );
}

export default SignUpComponent;
