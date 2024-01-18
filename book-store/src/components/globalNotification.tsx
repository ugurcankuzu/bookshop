"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, MouseEvent } from "react";
import { NotificationContext } from "./context/notificationContext";
import ENotificationAction from "@/enums/notificationContextAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function GlobalNotificationPopup() {
  const notificationContext = useContext(NotificationContext);

  const handleRemovePopup = (event: MouseEvent<HTMLButtonElement>) => {
    notificationContext.notificationDispatch({
      type: ENotificationAction.clearNotification,
    });
  };
  useEffect(() => {
    const timer = setTimeout(
      () =>
        notificationContext.notificationDispatch({
          type: ENotificationAction.clearNotification,
        }),
      5000
    );
    if (!notificationContext.notificationState.display && timer) {
      return clearTimeout(timer);
    }
  }, [notificationContext.notificationState]);

  return (
    <AnimatePresence>
      {notificationContext.notificationState.display && (
        <motion.div
          className={notificationStyles.notificationPopUp}
          initial={{ bottom: "0px", opacity: 0 }}
          animate={{ bottom: "20px", opacity: 1 }}
          exit={{ bottom: "0px", opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className={notificationStyles.notificationText}>
            {notificationContext.notificationState.message}
          </p>
          <button
            className={notificationStyles.notificationClose}
            onClick={handleRemovePopup}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const notificationStyles = {
  notificationPopUp:
    "w-4/5 p-2 bg-coal/90 text-pearl fixed left-1/2 -translate-x-1/2 rounded shadow-xl flex justify-center items-center font-bold",
  notificationText: "w-full",
  notificationClose: "w-1/4",
};
