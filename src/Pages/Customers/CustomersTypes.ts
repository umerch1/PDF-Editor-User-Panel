export type children = {

    navigation: "POP" | "PUSH" | "REPLACE";
    data: any,
    isLoading: boolean,
    refetch: any,
    isFetching: boolean,
    isError: boolean,
    progressBar: any,
    setProgressBar: Function;

}

export interface CustomersTypes {
    navigation: "POP" | "PUSH" | "REPLACE";
    children: any | children
}

