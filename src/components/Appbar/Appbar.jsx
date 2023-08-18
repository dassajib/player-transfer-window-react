import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Appbar.css";

const Appbar = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Link to="/" className="navlink">
          <Navbar.Brand href="/">RMA Window</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="navlink" to="/">
              Home
            </Link>
            <Link className="navlink" to="/window">
              Window
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
