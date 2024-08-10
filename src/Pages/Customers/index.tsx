import { AdminSidebar, UserCard, CircularProgressBar } from "../../components";
import { children } from "./CustomersTypes";

const CustomersComponent = ({ ...props }: children) => {
  const { data, isLoading, isFetching, isError, progressBar, setProgressBar } =
    props;

  return (
    <div className="adminContainer relative">
      {/* SideBar */}
      <AdminSidebar />
      {/* Main */}
      <main className="w-3/4 flex  gap-5 justify-center ">
        <div className=" w-3/4 gap-5 justify-center items-center">
          <h1 className="text-5xl textStyle">Users</h1>
          {isLoading && isFetching && <CircularProgressBar />}
          {data?.map((item: any, index: any) => {
            return (
              <UserCard
                progressBar={progressBar}
                setProgressBar={setProgressBar}
                key={index}
                item={item}
              />
            );
          })}
          {isError && (
            <p className="textStyle text-blueBg text-center">No Record Found</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default CustomersComponent;
