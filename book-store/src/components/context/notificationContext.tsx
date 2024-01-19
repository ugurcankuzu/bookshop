"use client";

import ENotificationAction from "@/enums/notificationContextAction";
import TNotification from "@/types/Notification";
import TNotificationReducer from "@/types/NotificationReducer";
import TNotificationContext from "@/types/notificationContext";
import { createContext, useContext, useReducer } from "react";

export const NotificationContext = createContext<TNotificationContext>(
  {} as TNotificationContext
);

function notificationReducer(
  state: TNotification,
  action: TNotificationReducer
) {
  switch (action.type) {
    case ENotificationAction.savedSuccess: {
      const notification: TNotification = {
        display: true,
        message: "Your Cart Saved Successfully",
      };
      return notification;
    }
    case ENotificationAction.savedNotSuccess: {
      const notification: TNotification = {
        display: true,
        message: "Something went wrong while saving your cart.",
      };
      return notification;
    }
    case ENotificationAction.loginSuccess: {
      const notification: TNotification = {
        display: true,
        message: "You've logged in successfully.",
      };
      return notification;
    }
    case ENotificationAction.logoutSuccess: {
      const notification: TNotification = {
        display: true,
        message: "Signout successfully done.",
      };
      return notification;
    }
    case ENotificationAction.clearNotification: {
      const notification: TNotification = {
        display: false,
        message: undefined,
      };
      return notification;
    }
    default:
      return state;
  }
}
export function useGlobalNotification() {
  const { notificationDispatch } = useContext(NotificationContext);
  return { notificationDispatch };
}
export function GlobalNotificationContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialValue = { display: false, message: undefined };
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    initialValue
  );

  return (
    <NotificationContext.Provider
      value={{
        notificationState: notification,
        notificationDispatch: notificationDispatch,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
