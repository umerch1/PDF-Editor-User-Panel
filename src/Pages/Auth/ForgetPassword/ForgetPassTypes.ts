import { Dispatch, FormEventHandler, ReactNode, SetStateAction } from "react"

export type userType = {
    email: string,
    newPass: string,
    confirmPass: string,
    errorMess: string,
    open: boolean
}

export type children = {
    navigation: any,
    user: userType,
    setUser: Dispatch<SetStateAction<userType>>,
    submitHandler: FormEventHandler<HTMLElement>,
    isError: boolean,
    data: [],
    error?: string,
    isSuccess: boolean
}


export interface ForgetPassTypes {
    navigation: any,
    children: (props: children) => ReactNode;
}