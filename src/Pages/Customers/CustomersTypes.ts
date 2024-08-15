import { Dispatch, SetStateAction } from "react";

export type children = {

    navigation: "POP" | "PUSH" | "REPLACE";
    data: any,
    isLoading: boolean,
    refetch: any,
    isFetching: boolean,
    isError: boolean,
    progressBar: boolean,
    setProgressBar: Dispatch<SetStateAction<boolean>>;

}

export interface CustomersTypes {
    navigation: "POP" | "PUSH" | "REPLACE";
    children: any | children
}

