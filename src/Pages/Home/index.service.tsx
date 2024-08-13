import { useEffect } from "react";
import { useSelector } from "react-redux";
import { userData } from "../../Redux/reducer";
import routs from "../../utilities/Routs";

function HomeServiceComponent({ navigation, children }: any) {
  const dataAccess = useSelector((state: any) => state.myReducer.userData);
  console.log("dataAccess", dataAccess);
  useEffect(() => {
    console.log("Data Length", userData.length, userData);
    if (dataAccess.length > 1) {
      console.log("Data Length", userData.length, userData);
      navigation(routs.DASHBOARD);
    } else {
      console.log("User not login");
    }
  }, []);
  return children({
    navigation,
  });
}

export default HomeServiceComponent;
