import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "./../../routes/routes.json";
import styles from "./Header.module.css";

const Header = () => {
  const linkClasses = ({ isActive }) =>
    isActive ? styles.activeLink : styles.linkStyle;

  return (
    <header style={{ marginBottom: "20px" }}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={routes.HOME} className={linkClasses}>
                Home
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link to={routes.ABOUT} className={linkClasses}>
                About
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link to={routes.PRODUCTS} className={linkClasses}>
                Products
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link to={routes.CONTACT_US} className={linkClasses}>
                Contact Us
              </Link>{" "}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
