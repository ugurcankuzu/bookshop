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
import {
  NotificationContext,
  getGlobalNotificationDispatcher,
} from "./notificationContext";
import ENotificationAction from "@/enums/notificationContextAction";

export const UserContext = createContext<TUserContext>({
  userState: false,
  userDispatch: {} as Dispatch<TUserReducerAction>,
});

function userReducer(state: boolean, action: TUserReducerAction) {
  const { notificationDispatch } = getGlobalNotificationDispatcher();
  switch (action.type) {
    case EUserActionTypes.login: {
      sessionStorage.setItem("usertkn", action.payload.tkn);
      notificationDispatch({
        type: ENotificationAction.loginSuccess,
      });
      return true;
    }
    case EUserActionTypes.logout: {
      sessionStorage.removeItem("usertkn");
      notificationDispatch({
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
