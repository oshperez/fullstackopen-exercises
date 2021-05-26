export default function createMessage(type, person) {
  const notifications = {
    "person added": `Added ${person}`,
    "person deleted": `Deleted ${person}`,
    "person updated": `Updated ${person}`,
    "delete error": `${person} has already been deleted from the server`,
    "unexpected error": "Something went wrong"
  };

  return notifications[type];
}
