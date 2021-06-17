import {Navbar, Nav, Form, FormControl} from "react-bootstrap"
import {Link} from "react-router-dom"


function NavBar () {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">Danny Sollomoni</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" >About Me</Nav.Link>
          <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
        </Nav>
          </Navbar>
    );
}

export default NavBar