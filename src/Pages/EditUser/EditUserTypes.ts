import { ReactNode } from "react";

export type children = {
    navigation: any
    titleName: string;
    signUp?: boolean;
    navigate: any;
    emailValue: string;
    setEmailValue: (e: string) => void;
    setPasswordValue: (e: string) => void;
    passwordValue: string;
    isError: boolean;
}

export interface EditUserTypes {
    navigation: any,
    children: (props: children) => ReactNode;
}