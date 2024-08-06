import { useResetPasswordMutation } from "../../Redux/api";
import { useCallback, useState } from "react";
import TextInput from "../../components/common/TextInput";
import Modal from "../../components/common/Modal";
import { Link } from "react-router-dom";
import routs from "../../utilities/Routs";
const ForgetPassword = () => {
  const [emailValue, setEmailValue] = useState("");
  const [newPassValue, setnewPassValue] = useState("");
  const [confirmPassValue, setConfirmPassValue] = useState("");
  const [errorState, setErrorState] = useState("");
  const [open, setOpen] = useState(true);
  const [resetPassword, { isError, data, error, isSuccess }] =
    useResetPasswordMutation();
  console.log("Response reset password", data, error);
  console.log(isError);
  const submitHandler = async (e: any) => {
    e.preventDefault();
    console.log(emailValue, newPassValue);
    if (confirmPassValue == newPassValue) {
      const val = {
        email: emailValue,
        password: newPassValue,
      };
      await resetPassword(val);
      setEmailValue("");
      setnewPassValue("");
      setConfirmPassValue("");
      setErrorState("");
    } else {
      setErrorState("Passwords do NOT match");
    }
  };
  const handleEmailChange=useCallback((e:any)=>{
    setEmailValue(e.target.value)
  },[emailValue]);
  
  const handleNewPassword=useCallback((e:any)=>{
    setnewPassValue(e.target.value)
  },[newPassValue]);

  const handleConfirmPassword=useCallback((e:any)=>{
    setConfirmPassValue(e.target.value)
  },[confirmPassValue]);

  return (
    <main>
      <form onSubmit={submitHandler}>
        <div className=" w-auto min-h-screen flex justify-center items-center ">
          <div className=" bg-blueBg shadow-md border w-80 border-main rounded-lg h-96 max-w-sm p-4">
            <div className="flex flex-row items-center justify-center">
              <h3 className="textStyle mb-3 text-2xl text-center">
                Reset Password
              </h3>
            </div>
            {/* _____________email input____________ */}
            <TextInput
              htmlFor="email"
              labelName="Your Email"
              type="email"
              name="email"
              value={emailValue}
              onChange={handleEmailChange}
              placeholder="name@company.com"
            />
            {/* _____________New password input____________ */}

            <TextInput
              htmlFor="New password"
              labelName="New password"
              type="password"
              name="password"
              value={newPassValue}
              onChange={handleNewPassword}
              placeholder="••••••••"
              eye
            />
            {/* _____________Confirm password input____________ */}

            <TextInput
              htmlFor="Confirm password"
              labelName="Confirm password"
              type="password"
              name="password"
              value={confirmPassValue}
              onChange={handleConfirmPassword}
              placeholder="••••••••"
              eye
            />
            <span className="textStyle text-sm text-red-500">{errorState}</span>
            <button className="buttonStyle text-xl font-bold w-full my-5">
              Reset Your password
            </button>
          </div>
        </div>
      </form>
      {isSuccess && (
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="text-center w-56">
            {/* <FontAwesomeIcon icon="fa-solid fa-circle-check" /> */}
            <div className="mx-auto my-4 w-48">
              <h3 className="text-lg font-black text-gray-800">
                Reset Password
              </h3>
              <p className="text-sm text-gray-500">
                Success fully Reset your password please login
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                to={routs.SIGN_IN}
                className="btn buttonStyle w-full"
              >
                Login
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default ForgetPassword;
