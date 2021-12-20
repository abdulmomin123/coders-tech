import { useContext } from 'react';
import styled from 'styled-components';
import {
  NotificationContext,
  NotificationContextSetter,
} from '../contexts/Notification';
import { NotificationType } from '../Types';

const Root = styled.div<{ notification: NotificationType }>`
  position: fixed;
  bottom: ${({ notification: { text } }) => (text ? '5%' : '-100%')};
  left: 50%;
  font-size: 2rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  color: #000;
  background: ${({ notification: { type } }) =>
    type === 'success' ? '#61bd4f' : '#fc4747'};
  border-radius: 3px;
  transform: translateX(-50%);
  transition: bottom 0.2s;
`;

const CloseIcon = styled.svg`
  width: 3.6rem;
  height: 3.6rem;
  padding: 1rem;
  margin-left: 2rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const Notification = () => {
  // Consuming context
  const notification = useContext(NotificationContext);
  const setNotification = useContext(NotificationContextSetter);

  return (
    <Root notification={notification}>
      {notification.text}

      <CloseIcon
        onClick={() => {
          setNotification({ type: notification.type, text: '' });
        }}
      >
        <use href="/close.svg#icon" />
      </CloseIcon>
    </Root>
  );
};

export default Notification;
