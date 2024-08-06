import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeDataStore } from "../../Redux/reducer";
import routs from "../../utilities/Routs";

const Logout = () => {
  const dispatch= useDispatch();
  const logoutFun=()=>{
    dispatch(removeDataStore());
  }
  return (
    <div className=" w-auto min-h-screen flex justify-center items-center ">
      <div className=" bg-blueBg shadow-md border border-main rounded-lg h-5/6 max-w-sm p-4">
        <div className="flex flex-col items-center justify-center">
          <h3 className="textStyle mb-3 text-2xl text-center">
            Do you want to logout?
          </h3>
          <div className="flex flex-row w-full justify-around">
            <Link to={routs.HOME} onClick={logoutFun} className="buttonStyle">
              Logout
            </Link>
            <Link to={routs.DASHBOARD} className=" buttonStyle from-white to-white">Cancel</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
