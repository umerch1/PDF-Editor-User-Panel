import { useSelector } from "react-redux";
import { DashboardTypes } from "./DashboardTypes";

function DashboardServiceComponent({ navigation, children }: DashboardTypes) {
  const dataAccess = useSelector((state: any) => state.myReducer.userData);
  const userName = dataAccess[1]?.data.name.match(/\b\w/g).join("");
  console.log("Data Access", userName);
  return children({
    navigation,
    dataAccess,
    userName,
  });
}

export default DashboardServiceComponent;
