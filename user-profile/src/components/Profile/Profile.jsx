import styles from "./Profile.module.css";

const Profile = ({ fname, email, avatar, deleteHandler, userIndex }) => {
  return (
    <div className={styles.profile}>
      <h5>{fname}</h5>
      <p>{email}</p>
      <img src={avatar} alt="" width="200" height="200" />
      <div>
        <button
          className={styles.delete}
          onClick={() => {
            deleteHandler(userIndex);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Profile;
