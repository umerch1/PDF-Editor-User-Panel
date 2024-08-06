import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface UserState {
    userData: object,
    errorMessage: string
}

// Define the initial state using that type
const initialState: UserState = {
    userData: [],
    errorMessage: ""
}
const myReducer = createSlice({
    name: 'myReducer',
    initialState,
    reducers: {
        userDataStore: (state, action: PayloadAction<object>) => {
            state.userData = action.payload
        },
        userErrorStore: (state, action: PayloadAction<string>) => {
            state.errorMessage = action.payload;
        },
        removeDataStore:(state)=>{
            state.userData=[]
        }
    },
})

export const { userDataStore, userErrorStore,removeDataStore } = myReducer.actions;

// Other code such as selectors can use the imported `RootState` type
export const userData = (state: RootState) => state.myReducer.userData;
export { myReducer }