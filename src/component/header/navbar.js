import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./navbar.css";

function NavbaaComp() {
  return (
    <div className="Header-bg">
      <div className="container">
        {["lg"].map((expand) => (
          <Navbar key={expand} expand={expand} className="">
            <Container fluid>
              <Navbar.Brand href="#">Virtual Tech</Navbar.Brand>
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
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-center flex-grow-1 gap-2  ">
                    <Nav.Link href="#action1" className="Navber-text">
                      Web3
                    </Nav.Link>
                    <Nav.Link href="#action2" className="Navber-text">
                      Metaverse
                    </Nav.Link>
                    <Nav.Link href="#action1" className="Navber-text">
                      App
                    </Nav.Link>
                    <Nav.Link href="#action2" className="Navber-text">
                      App Software
                    </Nav.Link>
                    <Nav.Link href="#action1" className="Navber-text">
                      AI
                    </Nav.Link>
                    <Nav.Link href="#action2" className="Navber-text">
                      IoT
                    </Nav.Link>
                    <Nav.Link href="#action1" className="Navber-text">
                      Chatbot
                    </Nav.Link>
                    <Nav.Link href="#action2" className="Navber-text">
                      Portfolio
                    </Nav.Link>
                    <Nav.Link href="#action2" className="Navber-text">
                      About Us
                    </Nav.Link>
                    <Nav.Link href="#action2" className="Navber-text">
                      Contact Us
                    </Nav.Link>
                    
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
       
      </div>
    </div>
  );
}

export default NavbaaComp;
