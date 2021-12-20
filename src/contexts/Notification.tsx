import { createContext, FC, useEffect, useState } from 'react';
import { NotificationType } from '../Types';

const InitialNotification: NotificationType = {
  type: 'success',
  text: '',
};

export const NotificationContext =
  createContext<NotificationType>(InitialNotification);
export const NotificationContextSetter = createContext<
  (notification: NotificationType) => void
>(() => {});

const NotificationProvider: FC = ({ children }) => {
  // State
  const [notification, setNotification] =
    useState<NotificationType>(InitialNotification);

  useEffect(() => {
    setTimeout(() => setNotification(InitialNotification), 4000);
  }, [notification]);

  return (
    <NotificationContext.Provider value={notification}>
      <NotificationContextSetter.Provider value={setNotification}>
        {children}
      </NotificationContextSetter.Provider>
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
