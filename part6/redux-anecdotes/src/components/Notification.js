import { connect } from "react-redux";
import { hideNotification } from "../reducers/notificationReducer";
import { useEffect } from "react";

const Notification = ({ notification, hideNotification }) => {
  useEffect(() => {
    if (notification.message) {
      const notificationTimer = setTimeout(
        () => hideNotification(),
        notification.duration * 1000
      );

      return () => {
        clearTimeout(notificationTimer);
      };
    }
  }, [notification, hideNotification]);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  return notification.active ? (
    <div style={style}>{notification.message}</div>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  };
};

const mapDispatchToProps = {
  hideNotification,
};

const ConnectedNotification = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);

export default ConnectedNotification;
