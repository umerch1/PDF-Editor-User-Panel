import CustomersComponent from "./index";
import CustomersServiceComponent from "./index.service";

function Customers(props: any) {
  return (
    <CustomersServiceComponent {...props}>
      {(props: any) => <CustomersComponent {...props} />}
    </CustomersServiceComponent>
  );
}

export default Customers;
