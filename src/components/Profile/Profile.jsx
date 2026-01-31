import clsx from "clsx";
import "./Profile.css";

const Profile = ({ name, phone, email, status, avatar, userId }) => {
  return (
    <div
      className={clsx("card-item", {
        "on-status": status === "online",
        "off-status": status === "offline",
      })}
    >
      <h2>Name: {name}</h2>
      <img src={avatar} alt={name} />
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Status: {status === "online" ? "🟢" : "🥵"}</p>
      <p>id:{userId}</p>
    </div>
  );
};
export default Profile;
