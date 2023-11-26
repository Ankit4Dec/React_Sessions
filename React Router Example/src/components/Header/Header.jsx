import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "./../../routes/routes.json";

const Header = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">React App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={routes.HOME}>Home</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link to={routes.ABOUT}>About</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link to={routes.PRODUCTS}>Products</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link to={routes.CONTACT_US}>Contact Us</Link>{" "}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
