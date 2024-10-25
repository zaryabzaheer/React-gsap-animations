import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { images } from '../assets/assets';

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <Image src={images.logo} width="100" height="100" className="d-inline-block align-top"alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Products</Nav.Link>
            <Nav.Link href="#blogs">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
