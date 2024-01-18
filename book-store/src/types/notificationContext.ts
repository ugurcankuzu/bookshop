import { Dispatch } from "react";
import TNotification from "./Notification";
import TNotificationReducer from "./NotificationReducer";

type TNotificationContext = {
  notificationState: TNotification;
  notificationDispatch: Dispatch<TNotificationReducer>;
};

export default TNotificationContext;
