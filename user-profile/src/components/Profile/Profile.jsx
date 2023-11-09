import styles from "./Profile.module.css";

const Profile = ({ fname, email, avatar }) => {
  return (
    <div className={styles.profile}>
      <h5>{fname}</h5>
      <p>{email}</p>
      <img src={avatar} alt="user-image" width="200" height="200" />
    </div>
  );
};

export default Profile;
