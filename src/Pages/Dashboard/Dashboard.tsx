import DashboardServiceComponent from "./index.service";
import DashboardCustomers from ".";

function Dashboard(props: any) {
  return (
    <DashboardServiceComponent {...props}>
      {(props: any) => <DashboardCustomers {...props} />}
    </DashboardServiceComponent>
  );
}

export default Dashboard;
