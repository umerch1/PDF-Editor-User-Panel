import EditUserServiceComponent from "./index.service";
import EditUserComponent from ".";

const EditUser = (props: any) => {
  return (
    <EditUserServiceComponent {...props}>
      {(props: any) => <EditUserComponent {...props} />}
    </EditUserServiceComponent>
  );
};

export default EditUser;
