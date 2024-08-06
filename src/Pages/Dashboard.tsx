import { useSelector } from "react-redux";
import search from "../assets/icon_search.gif";
import notification from "../assets/notification.gif";
import AdminSidebar from "../components/AdminSidebar";
import HistoryCard from "../components/HistoryCard";
const Dashboard = () => {
  const dataAccess = useSelector((state: any) => state.myReducer.userData);
const userName=dataAccess[1].data.name.match(/\b\w/g).join('');
  console.log("Data Access", dataAccess,userName);
  return (
    <div className="w-full min-h-lvh flex flex-row">
      {/* SideBar */}
      <AdminSidebar />
      {/* Main */}
      <main className="w-3/4">
        <div className="flex justify-between p-4 border-b-2">
          <div />
          <div className="flex items-center">
            <div className="flex w-96 h-12 px-3 items-center border rounded-lg">
              <img className="w-5 h-5 " src={search} alt="Search Icon" />
              <input
                className="bg-white m-0"
                placeholder="Search"
                type="text"
                name="search"
                id="search"
              />
            </div>
            <img
              className="w-5 h-5 mr-3 mx-10"
              src={notification}
              alt="Notification"
            />
            <div className="w-10 h-10 bg-blueBg rounded-full flex justify-center items-center">
              <span className="text-white text-md font-bold uppercase">{userName}</span>
            </div>
          </div>
        </div>
        <div className="m-3">
          <span className="headingTextStyle text-blueBg  text-5xl">
            PDF Editor Dashboard Features
          </span>
          <div className="mt-3">
            <HistoryCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
