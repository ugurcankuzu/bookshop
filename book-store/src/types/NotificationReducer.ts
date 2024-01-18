import ENotificationAction from "@/enums/notificationContextAction";

type TNotificationReducer = {
  type: ENotificationAction;
  payload?: string;
};

export default TNotificationReducer;
