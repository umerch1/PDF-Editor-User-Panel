import { To } from "react-router-dom";
import { store } from "../../Redux/store"
import React, { LegacyRef } from "react";
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
    fileInputRef: LegacyRef<HTMLInputElement>,
    convertToPDF: any,
    processedImage: any,
    handleImageUpload: () => void,
    removeBackground: () => void,
}

// SignInTypes declare
export interface ImageEitorTypes {
    navigation: NavigateFunction;
    children: any | children | React.ReactNode
}