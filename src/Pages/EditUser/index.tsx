import { children } from "./EditUserTypes";
import "./style.css";
const EditUserComponent = ({
  titleName,
  signUp,
  emailValue,
  setEmailValue,
  passwordValue,
  setPasswordValue,
  isError,
}: children) => {
  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="flex-center">
          <h3 className="title-name">{titleName}</h3>
        </div>
        {isError && (
          <div className="error-message">Email/password is invalid</div>
        )}
        {signUp && (
          <div>
            <label htmlFor="text" className="label-style">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="input-style"
              placeholder="Your Name"
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="email" className="label-style">
            Your email
          </label>
          <input
            type="email"
            name="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            id="email"
            className="input-style"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="">
            Your password
          </label>
          <input
            type="password"
            name="password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            id="password"
            placeholder="••••••••"
            className="input-style"
            required
          />
        </div>
        <div className="flex justify-between my-5">
          <div className="flex ">
            <div className="flex items-center h-5 ">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="input-style"
                required
              />
            </div>

            <label htmlFor="remember" className="label-style">
              Remember me
            </label>
          </div>
        </div>
        <button className="buttonStyle text-xl font-bold w-full">
          Edit to your account
        </button>
      </div>
    </div>
  );
};

export default EditUserComponent;
