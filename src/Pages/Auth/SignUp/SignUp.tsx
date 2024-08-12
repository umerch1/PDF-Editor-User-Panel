import SignUpComponent from "./index";
import SignUpServiceComponent from "./index.service";

function SignUp(props: any) {
  return (
    <SignUpServiceComponent {...props}>
      {(props: any) => <SignUpComponent {...props} />}
    </SignUpServiceComponent>
  );
}

export default SignUp;
