import { Route, Routes, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import CabinetDrug from "./CabinetDrug";
import Home from "./Home";
import Cabinet from "./Cabinet";
function Main() {
  const navigate = useNavigate();
  return (
    <Container fluid>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">BiotechSquare</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Button
                variant="outline-primary"
                size="md"
                gap={2}
                className="m-2"
                onClick={() => navigate("/")}
              >
                Home
              </Button>
              <Button
                variant="outline-success"
                size="md"
                gap={2}
                className="m-2"
                onClick={() => navigate("/cabinet")}
              >
                Cabinet
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/cabinet" element={<Cabinet />} />
          <Route path="/drug" element={<CabinetDrug />} />
        </Routes>
      </Container>
    </Container>
  );
}

export default Main;
