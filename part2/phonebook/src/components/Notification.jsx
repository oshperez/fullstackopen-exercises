const Notification = ({ notification }) => {
  return (
    <span
      className={`notification ${
        notification.type === "err"
          ? "error "
          : notification.type === "success"
          ? "success "
          : ""
      }${notification.active ? "show" : "hide"}`}
    >
      {notification.content}
    </span>
  );
};

export default Notification;
