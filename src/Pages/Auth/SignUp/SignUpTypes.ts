import { To } from "react-router-dom";
import { store } from "../../../Redux/store"
import React, { Dispatch, FormEventHandler, SetStateAction } from "react";
import { Person } from "../../../types";
// Dispatch Type define
export type AppDispatch = typeof store.dispatch;
// navigation Type define
interface NavigateFunction {
    (to: To, options?: NavigateOptions): void;
    (delta: number): void;
}

interface NavigateOptions {
    replace?: boolean;
    state?: any;
    preventScrollReset?: boolean;
    relative?: RelativeRoutingType;
    unstable_flushSync?: boolean;
    unstable_viewTransition?: boolean;
}

type RelativeRoutingType = "route" | "path";

//   Page props pass types define
export type children = {
    navigation: NavigateFunction,
    dispatch: AppDispatch,
    isError: boolean
    data?: []
    submitHandler: FormEventHandler<HTMLFormElement>;
    ToastContainer: any;
    isSuccess: boolean;
    isLoading: boolean;
    user: Person;
    setUser: Dispatch<SetStateAction<Person>>;

}

// SignUpTypes declare
export interface SignUpTypes {
    navigation: NavigateFunction;
    children: any | children | React.ReactNode;
}