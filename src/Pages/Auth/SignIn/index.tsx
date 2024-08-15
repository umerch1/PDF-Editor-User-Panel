import { Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import routs from "../../../utilities/Routs";
import { children } from "./SignInTypes";
import { Auth } from "../../../components";

const SignInComponent = ({
  isError,
  data,
  submitHandler,
  ToastContainer,
  user,
  setUser,
}: children) => {
  return (
    <div>
      {data && <Navigate to={routs.DASHBOARD} />}
      <ToastContainer />
      <form onSubmit={submitHandler}>
        <Auth
          navigate={routs.DASHBOARD}
          titleName="Sign In"
          user={user}
          setUser={setUser}
          isError={isError}
        />
      </form>
    </div>
  );
};

export default SignInComponent;
