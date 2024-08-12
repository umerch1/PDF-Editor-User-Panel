import SignInServiceComponent from "./index.service";
import SignInComponent from ".";

function SignIn(props: any) {
  return (
    <SignInServiceComponent {...props}>
      {(props: any) => <SignInComponent {...props} />}
    </SignInServiceComponent>
  );
}

export default SignIn;
