import { Link } from "react-router-dom";
import "../../Styles/loginstyle.css";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";

const Login = () => {
  return (
    <div className="bodyStyle">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form action="#">
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input type="text" name="txt" placeholder="User name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required
            />

            <button>
              <Link to={"/admin/dashboard"}>Sign up</Link>
            </button>
          </form>
        </div>
        <div className="login">
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <div className="socialmedia">
            <LoginSocialFacebook
              appId={"1360817258129137"}
              isOnlyGetToken
              onResolve={({ provider }: any) => {
                console.log(provider);
              }}
              onReject={(err: any) => {
                console.log(err);
              }}
            >
              <GoogleLoginButton onClick={() => console.log("Facebook")}>
                <span>Google</span>
              </GoogleLoginButton>
            </LoginSocialFacebook>
          </div>
          <button>
            <Link style={{ color: "#fff" }} to={"/admin/dashboard"}>
              Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
