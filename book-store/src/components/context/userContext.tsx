"use client";
import EUserActionTypes from "@/enums/userContextActionEnum";
import TUserContext from "@/types/userContext";
import TUserReducerAction from "@/types/userReducerAction";
import { createContext, Dispatch, ReactNode, useReducer } from "react";

export const UserContext = createContext<TUserContext>({
  userState: false,
  userDispatch: {} as Dispatch<TUserReducerAction>,
});

function userReducer(state: boolean, action: TUserReducerAction) {
  switch (action.type) {
    case EUserActionTypes.login: {
      return true;
    }
    case EUserActionTypes.logout: {
      sessionStorage.removeItem("usertkn");
      return false;
    }
  }
}

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, userDispatch] = useReducer(userReducer, false);
  return (
    <UserContext.Provider
      value={{ userState: user, userDispatch: userDispatch }}
    >
      {children}
    </UserContext.Provider>
  );
}
