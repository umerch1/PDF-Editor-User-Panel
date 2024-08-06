import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link, useLocation, Location } from "react-router-dom";
import pdf from "../assets/PDF_TECH.svg";
import routs from "../utilities/Routs";
import { useSelector } from "react-redux";
const AdminSidebar = () => {
  const admin=useSelector((state:any)=>state.myReducer.userData[2]?.admin);
  console.log("admin",admin)
  const location = useLocation();
  return (
    <aside className="w-1/4 min-h-lvh px-8 py-8 bg-blueBg">
      <img src={pdf} className="h-14 w-28" alt="Flowbite Logo" />
      <div className="w-full h-full">
        <ul className="flex flex-col justify-between border-spacing-5 border-black">
          <div>
            <Li
              url={routs.DASHBOARD}
              text="Dashboard"
              location={location}
              Icon={RiDashboardFill}
            />
            {/* Product */}
            <Li
              url={routs.DOCUMENT}
              text="PDF Editor"
              location={location}
              Icon={RiShoppingBag3Fill}
            />
            {/* Customers */}
            <Li
              url={routs.IMAGE_EDITOR}
              text="Image Editor"
              location={location}
              Icon={AiFillFileText}
            />
          {admin &&  <Li
              url={routs.USER}
              text="User"
              location={location}
              Icon={IoIosPeople}
            />}
            {/* Transation */}
            {/* <Li
              url={routs.TRANSACTION}
              text="Help"
              location={location}
              Icon={AiFillFileText}
            /> */}
          </div>
          {/* Logout */}
          <div>
            <Li
              url={routs.LOGOUT}
              text="Logout"
              location={location}
              Icon={AiFillFileText}
            />
          </div>
        </ul>
      </div>
    </aside>
  );
};
interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}
const Li = ({ url, text, location, Icon }: LiProps) => {
  return (
    <li>
      <Link
        style={{
          background: location.pathname.includes(url) ? "white" : "#13144D",
        }}
        className=" text-main flex flex-row items-center my-5 w-full pl-4 active:bg-white  rounded-xl h-12 "
        to={url}
      >
        <Icon />
        <span className="textStyle ml-8">{text}</span>
      </Link>
    </li>
  );
};

export default AdminSidebar;
