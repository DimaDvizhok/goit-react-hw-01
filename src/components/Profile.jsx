const Profile = ({ name, phone, email, status, avatar, userId }) => {
  return (
    <div className="card-item">
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
