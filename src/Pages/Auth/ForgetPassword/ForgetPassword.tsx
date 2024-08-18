import ForgetPassServiceComp from "./index.service";
import ForgetPassComp from ".";

const ForgetPassword = (props: any) => {
  return (
    <ForgetPassServiceComp {...props}>
      {(props: any) => <ForgetPassComp {...props} />}
    </ForgetPassServiceComp>
  );
};

export default ForgetPassword;
