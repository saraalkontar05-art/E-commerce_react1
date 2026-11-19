import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import {
  FaRegUser,
  FaRegBookmark,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ products }) => {
  const [search, setSearch] = useState("");
  const filterSearch = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Navbar>
      <Container>
        <Row className="justify-content-center align-items-center w-100">
          <Col md={6} className="d-md-flex text-center gap-3 ">
            <Navbar.Brand as={Link} to="/">
              <img src={logo} alt="store Logo" />
            </Navbar.Brand>
            <div className="d-flex bg-light p-1 m-2 position-relative rounded-5">
              <input
                type="text"
                className="form-control bg-light border-0 "
                style={{ minWidth: "300px" }}
                placeholder="Search for mor than 20.000 products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <FaSearch
                className="position-absolute top-50 translate-middle"
                style={{ left: "95%" }}
              />
            </div>
          </Col>
          <Col md={3} className="d-flex justify-content-center my-3 my-md-0">
            <div className="d-flex gap-4 fw-bold">
              <Nav.Link as={Link} to="/">HOME</Nav.Link>
              <Nav.Link as={Link} to="/">PAGES</Nav.Link>
            </div>
          </Col>
          <Col md={3} className="d-flex justify-content-center ">
            <div className="d-flex gap-4">
              <Nav.Link>
                <FaRegUser />
              </Nav.Link>
              <Nav.Link>
                <FaRegBookmark />
              </Nav.Link>
              <Nav.Link as={Link} to="./Cart">
                <FaShoppingCart />
              </Nav.Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
