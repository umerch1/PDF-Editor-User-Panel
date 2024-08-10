import { useEffect, useState } from "react";
import { useGetUserQuery } from "../../Redux/api";
import { CustomersTypes } from "./CustomersTypes";

const CustomersServiceComponent = ({
  children,
  navigation,
}: CustomersTypes) => {
  const { data, isLoading, refetch, isFetching, isError } = useGetUserQuery({});

  console.log("data", isError);
  const [progressBar, setProgressBar] = useState(null);
  const fetchData = async () => {
    await refetch();
  };
  useEffect(() => {
    fetchData;
  }, [navigation]);
  return children({
    navigation,
    data,
    isLoading,
    refetch,
    isFetching,
    isError,
    progressBar,
    setProgressBar,
  });
};

export default CustomersServiceComponent;
