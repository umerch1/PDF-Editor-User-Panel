import { useState } from "react";
import Auth from "../../components/Auth";
import { useRegisterUserMutation } from "../../Redux/api";
import CircularProgressBar from "../../components/CircularProgressBar";
import { Navigate } from "react-router-dom";

function SignUp() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [name,setName]=useState("");
  const [registerUser, { isError, data, isLoading,isSuccess }] =
    useRegisterUserMutation();
    if (isSuccess) {
      console.log("SuccessFully")
    //  <Navigate replace to={'/dashboard'} />
    }
  if (data) {
    console.log("Successfuly register your account");
  }
  console.log(isError);
  const submitHandler = async (e: any) => {
    e.preventDefault();
    console.log(emailValue, passwordValue,name);
    const val = {
      name:name,
      email: emailValue,
      password: passwordValue,
    };

    await registerUser(val);
  };
  return (
    <div>
      {isLoading ? (
        <CircularProgressBar />
      ) : (
        <form onSubmit={submitHandler}>
          <Auth
            navigate="/admin/dashboard"
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
      {
        isSuccess&&<Navigate replace to={'/admin/dashboard'}/>
      }
    </div>
  );
}

export default SignUp;
