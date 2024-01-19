"use client";
import EUserActionTypes from "@/enums/userContextActionEnum";
import TUserContext from "@/types/userContext";
import TUserReducerAction from "@/types/userReducerAction";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { NotificationContext } from "./notificationContext";
import ENotificationAction from "@/enums/notificationContextAction";

export const UserContext = createContext<TUserContext>({
  userState: false,
  userDispatch: {} as Dispatch<TUserReducerAction>,
});
const notificationCtx = useContext(NotificationContext);

function userReducer(state: boolean, action: TUserReducerAction) {
  switch (action.type) {
    case EUserActionTypes.login: {
      sessionStorage.setItem("usertkn", action.payload.tkn);
      notificationCtx.notificationDispatch({
        type: ENotificationAction.loginSuccess,
      });
      return true;
    }
    case EUserActionTypes.logout: {
      sessionStorage.removeItem("usertkn");
      notificationCtx.notificationDispatch({
        type: ENotificationAction.logoutSuccess,
      });
      return false;
    }
  }
}

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, userDispatch] = useReducer(userReducer, false);
  useEffect(() => {
    const tkn = sessionStorage.getItem("usertkn");
    if (tkn) {
      userDispatch({ type: EUserActionTypes.login, payload: { tkn: tkn } });
    }
  }, []);
  return (
    <UserContext.Provider
      value={{ userState: user, userDispatch: userDispatch }}
    >
      {children}
    </UserContext.Provider>
  );
}
