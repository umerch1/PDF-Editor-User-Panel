import TextInput from "../../../components/common/TextInput";
import Modal from "../../../components/common/Modal";
import { Link } from "react-router-dom";
import routs from "../../../utilities/Routs";
import { children } from "./ForgetPassTypes";

const ForgetPassComp = ({
  user,
  setUser,
  isSuccess,
  submitHandler,
}: children) => {
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
              value={user.email}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="name@company.com"
            />
            {/* _____________New password input____________ */}

            <TextInput
              htmlFor="New password"
              labelName="New password"
              type="password"
              name="password"
              value={user.newPass}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, newPass: e.target.value }))
              }
              placeholder="••••••••"
              eye
            />
            {/* _____________Confirm password input____________ */}

            <TextInput
              htmlFor="Confirm password"
              labelName="Confirm password"
              type="password"
              name="password"
              value={user.confirmPass}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, confirmPass: e.target.value }))
              }
              placeholder="••••••••"
              eye
            />
            <span className="textStyle text-sm text-red-500">
              {user.errorMess}
            </span>
            <button className="buttonStyle text-xl font-bold w-full my-5">
              Reset Your password
            </button>
          </div>
        </div>
      </form>
      {isSuccess && (
        <Modal
          open={user.open}
          onClose={() => setUser((prev) => ({ ...prev, open: false }))}
        >
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
              <Link to={routs.SIGN_IN} className="btn buttonStyle w-full">
                Login
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default ForgetPassComp;
