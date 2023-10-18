import {Container , Nav , Navbar} from 'react-bootstrap';


const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">React Component</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Example</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
