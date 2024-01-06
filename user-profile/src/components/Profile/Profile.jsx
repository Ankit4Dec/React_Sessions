import { backgroundColorHoC } from "../../hoc/backgroundColorHoC";
import styles from "./Profile.module.css";
import PropTypes from "prop-types";

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

export default backgroundColorHoC(Profile, "antiquewhite");

Profile.propTypes = {
  fname: PropTypes.string.isRequired,
  lname: PropTypes.string,
  avatar: PropTypes.string,
  deleteHandler: PropTypes.func.isRequired,
  userIndex: PropTypes.number.isRequired,
};
