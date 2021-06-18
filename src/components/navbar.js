import {Navbar, Nav} from "react-bootstrap"
import {Link} from "react-router-dom"


function NavBar () {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/React-Profile/">Danny Sollomoni</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/React-Profile/" >About Me</Nav.Link>
          <Nav.Link as={Link} to="/React-Profile/resume">Resume</Nav.Link>
          <Nav.Link as={Link} to="/React-Profile/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/React-Profile/portfolio">Portfolio</Nav.Link>
        </Nav>
          </Navbar>
    );
}

export default NavBar