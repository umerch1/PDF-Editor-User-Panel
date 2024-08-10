import * as React from "react";
import CustomersComponent from "./index";
import CustomersServiceComponent from "./index.service";

function Customers(this: any) {
  return (
    <CustomersServiceComponent {...this.props}>
      {(props: any) => <CustomersComponent {...props} />}
    </CustomersServiceComponent>
  );
}

export default Customers;
