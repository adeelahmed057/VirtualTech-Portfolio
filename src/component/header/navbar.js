import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./navbar.css";
import { Link } from "react-router-dom";
import VirtualLogo from "../../assets/logo/virtualLogo-01.svg"

function NavbaaComp() {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          {["xl"].map((expand) => (
            <Navbar key={expand} expand={expand} className="">
              <Container fluid className="">
                <Navbar.Brand >
                  <Link to="/">
                    <img src={VirtualLogo} className="img-fluid" width={"30%"}/>
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                  className="m-auto"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 gap-2  ">
                      <Nav.Link>
                        <Link to="/web3" className="Navber-text">
                          Web3
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link to="/metaverse" className="Navber-text">
                          Metaverse
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link to="/app" className="Navber-text">
                          App
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link to="/software" className="Navber-text">
                          Software
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link to="/ai" className="Navber-text">
                          AI
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link className="Navber-text" to="/iot">
                          IOT
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link to="/chatbot" className="Navber-text">
                          Chatbot
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link className="Navber-text" to="/portfolio">
                          Portfolio
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link className="Navber-text" to="/aboutus">
                          About Us
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link to="/contactus" className="Navber-text">
                          Contact Us
                        </Link>
                      </Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavbaaComp;
