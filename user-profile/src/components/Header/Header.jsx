import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Users Profile</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Profiles</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
