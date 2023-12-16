import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from "./../../routes/routes.json";
import styles from "./Header.module.css";

const Header = () => {
  const linkStyle = ({ isActive }) =>
    isActive ? styles.activeStyle : styles.linkStyle;

  return (
    <header to={styles.headerContainer}>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <NavLink to={routes.HOME} className={styles.linkStyle}>
              Users Profile
            </NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to={routes.PROFILES} className={linkStyle}>
                Profiles
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to={routes.ADD_USER} className={linkStyle}>
                Add User
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
