import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const Header = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container className="justify-content-center">
                <Navbar.Brand>
                    <Link
                    to="/"
                    style={{
                        textDecoration: "none"
                    }}
                >Главная страница</Link></Navbar.Brand>
                <PrivateRoute>
                    <Nav>
                        <Nav.Link ><Link to="/hero">Hero</Link></Nav.Link>
                        <Nav.Link><Link to="/location">Location</Link></Nav.Link>
                        <Nav.Link><Link to="/episodes">Episode</Link></Nav.Link>
                    </Nav>
                </PrivateRoute>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <NavLink to="/login">Login</NavLink>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;