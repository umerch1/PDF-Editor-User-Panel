import { useEffect, useState } from "react";
import { useGetUserQuery } from "../Redux/api";
import AdminSidebar from "../components/AdminSidebar";
import UserCard from "../components/UserCard";
import CircularProgressBar from "../components/CircularProgressBar";
import { useNavigate } from "react-router-dom";
const Customers = () => {
  const navigation=useNavigate()
  const {data,isLoading,refetch,isFetching,isError}=useGetUserQuery({});
  
  console.log('data',isError);
  const [progressBar, setProgressBar] = useState(null);
  const fetchData=async()=>{
    await refetch()
  }
  useEffect(() => {
  fetchData
  }, [navigation])
  
  return (
    <div className="adminContainer relative">
      {/* SideBar */}
      <AdminSidebar />
      {/* Main */}
      <main className="w-3/4 flex  gap-5 justify-center ">
        <div className=" w-3/4 gap-5 justify-center items-center">
        <h1 className="text-5xl textStyle">Users</h1>
        {isLoading && isFetching && <CircularProgressBar/>}
          {data?.map((item,index)=>{
          return(
            <UserCard progressBar={progressBar} setProgressBar={setProgressBar} key={index} item={item} />
          )
        })}
        {isError && <p className="textStyle text-blueBg text-center">No Record Found</p>}
        </div>
        
        
      </main>
    </div>
  );
};

export default Customers;
