import { backgroundColorHoC } from "../../hoc/backgroundColorHoC";
import styles from "./Profile.module.css";

const Profile = ({ fname, email, avatar, deleteHandler, userIndex }) => {
  return (
    <div>
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

// export default Profile;

export default backgroundColorHoC(Profile, 'antiquewhite');
