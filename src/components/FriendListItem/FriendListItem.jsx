import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      {isOnline ? <p className={css.online}>Online</p> : <p className={css.offline}>Offline</p>}
    </>
  );
};

export default FriendListItem;
