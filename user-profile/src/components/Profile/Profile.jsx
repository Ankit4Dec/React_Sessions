import { useContext } from "react";
import { backgroundColorHoC } from "../../hoc/backgroundColorHoC";
import styles from "./Profile.module.css";
import PropTypes from "prop-types";
import { ThemeContext } from "../../contexts/ThemeContext";

const Profile = ({ fname, email, avatar, deleteHandler, userIndex }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={isDark ? styles.darkTheme : ""}>
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
