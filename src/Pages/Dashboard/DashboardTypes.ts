import { To } from "react-router-dom";
import React from "react";
import { store } from "../../Redux/store";
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
    dataAccess: any;
    userName: string;
}

// DashboardTypes declare
export interface DashboardTypes {
    navigation: NavigateFunction;
    children: any | children | React.ReactNode;
}

export type RootState = ReturnType<typeof store.getState> | any;